import OpenAI from "openai";
import { NextRequest } from "next/server";
import { getSessionFromRequest } from "@/lib/auth";
import { buildKnowledgeContext } from "@/lib/knowledge";
import { buildSystemPrompt } from "@/lib/prompt";
import { checkDailyLimit, consumeDailyLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function dailyLimit(): number {
  const n = Number(process.env.DAILY_CHAT_LIMIT ?? "30");
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 30;
}

function maxOutputTokens(): number {
  const n = Number(process.env.OPENAI_MAX_OUTPUT_TOKENS ?? "2000");
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 2000;
}

function modelTemperature(): number {
  const n = Number(process.env.MODEL_TEMPERATURE ?? "0.2");
  if (!Number.isFinite(n)) return 0.2;
  return Math.min(2, Math.max(0, n));
}

function aiProvider(): "openrouter" | "openai" {
  const raw = (process.env.AI_PROVIDER ?? "openrouter").trim().toLowerCase();
  return raw === "openai" ? "openai" : "openrouter";
}

function resolveModel(provider: "openrouter" | "openai"): string {
  if (provider === "openrouter") {
    return process.env.OPENROUTER_MODEL?.trim() || "openai/gpt-4.1-mini";
  }
  return process.env.OPENAI_MODEL?.trim() || "gpt-4.1-mini";
}

function usesCompletionTokens(model: string): boolean {
  const m = model.toLowerCase();
  return (
    m.includes("gpt-5") ||
    /(^|\/)(o1|o3|o4)([-_/]|$)/.test(m) ||
    /(^|\/)o\d/.test(m)
  );
}

function supportsTemperature(model: string): boolean {
  // Reasoning-heavy families often reject or ignore temperature.
  return !usesCompletionTokens(model);
}

function createClient(provider: "openrouter" | "openai"): OpenAI {
  if (provider === "openrouter") {
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
      throw new Error("Server is missing OPENROUTER_API_KEY.");
    }
    return new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": process.env.OPENROUTER_SITE_URL?.trim() || "",
        "X-Title": process.env.OPENROUTER_APP_NAME?.trim() || "Empower CF Studio",
      },
    });
  }

  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Server is missing OPENAI_API_KEY.");
  }
  return new OpenAI({ apiKey });
}

export async function POST(req: NextRequest) {
  const session = await getSessionFromRequest(req);
  if (!session) {
    return Response.json({ error: "Unauthorized. Please log in." }, { status: 401 });
  }

  const provider = aiProvider();
  let client: OpenAI;
  let model: string;
  try {
    client = createClient(provider);
    model = resolveModel(provider);
  } catch (err) {
    const message = err instanceof Error ? err.message : "AI provider is not configured.";
    return Response.json({ error: message }, { status: 500 });
  }

  const ip = getClientIp(req.headers);
  const limit = dailyLimit();
  const precheck = checkDailyLimit(ip, limit);
  if (!precheck.allowed) {
    return Response.json(
      {
        error: `Daily chat limit reached (${limit} / IP / UTC day). Try again tomorrow.`,
        remaining: 0,
        limit,
      },
      { status: 429 },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const cleaned = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.trim() }))
    .slice(-8);

  const lastUser = [...cleaned].reverse().find((m) => m.role === "user");
  if (!lastUser) {
    return Response.json({ error: "At least one user message is required." }, { status: 400 });
  }

  const historyText = cleaned.map((m) => m.content).join("\n");
  const { context, selectedIds } = buildKnowledgeContext(lastUser.content, historyText);
  const system = buildSystemPrompt(context);

  const consumed = consumeDailyLimit(ip, limit);
  if (!consumed.allowed) {
    return Response.json(
      {
        error: `Daily chat limit reached (${limit} / IP / UTC day). Try again tomorrow.`,
        remaining: 0,
        limit,
      },
      { status: 429 },
    );
  }

  const maxOut = maxOutputTokens();
  const completionTokens = usesCompletionTokens(model);
  const temperature = modelTemperature();

  try {
    const stream = await client.chat.completions.create({
      model,
      stream: true,
      ...(completionTokens ? { max_completion_tokens: maxOut } : { max_tokens: maxOut }),
      ...(supportsTemperature(model) ? { temperature } : {}),
      messages: [{ role: "system", content: system }, ...cleaned],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        const meta = JSON.stringify({
          selectedIds,
          remaining: consumed.remaining,
          limit: consumed.limit,
          provider,
          model,
        });
        controller.enqueue(encoder.encode(`event: meta\ndata: ${meta}\n\n`));
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content;
            if (delta) {
              controller.enqueue(
                encoder.encode(`event: token\ndata: ${JSON.stringify({ text: delta })}\n\n`),
              );
            }
          }
          controller.enqueue(encoder.encode(`event: done\ndata: {}\n\n`));
        } catch (err) {
          const message = err instanceof Error ? err.message : "Upstream model error";
          controller.enqueue(
            encoder.encode(`event: error\ndata: ${JSON.stringify({ error: message })}\n\n`),
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to call the model provider";
    return Response.json({ error: message }, { status: 502 });
  }
}
