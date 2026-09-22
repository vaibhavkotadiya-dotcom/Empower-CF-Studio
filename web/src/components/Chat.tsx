"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./chat.module.css";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

const EXAMPLE = {
  label: "Bracketing %RSD",
  prompt:
    "I need one Peak custom field for five-point bracketing-standard %RSD using S1 initial standards and BRK% brackets on Area.",
};

const STORAGE_KEY = "empower-cf-studio-messages";

function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function detectEvidenceBadges(text: string): string[] {
  const badges: string[] = [];
  const lower = text.toLowerCase();
  if (lower.includes("empower-tested") || lower.includes("empower tested")) badges.push("Empower-tested");
  if (lower.includes("user-confirmed") || lower.includes("user confirmed")) badges.push("user-confirmed");
  if (lower.includes("assistant-draft") || lower.includes("assistant drafted") || /\bdraft\b/.test(lower)) {
    badges.push("draft");
  }
  return [...new Set(badges)];
}

function extractFormulas(text: string): string[] {
  const blocks: string[] = [];
  const re = /```(?:text|empower|formula)?\n([\s\S]*?)```/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    const body = match[1]?.trim();
    if (body && body.length < 4000) blocks.push(body);
  }
  return blocks;
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19V5M12 5l-6 6M12 5l6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hydrated = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed)) setMessages(parsed.slice(-40));
      }
    } catch {
      /* ignore */
    }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {
      /* ignore */
    }
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  const empty = messages.length === 0;

  async function sendPrompt(prompt: string) {
    const trimmed = prompt.trim();
    if (!trimmed || busy) return;

    setError(null);
    const userMsg: Message = { id: uid(), role: "user", content: trimmed };
    const assistantId = uid();
    const nextMessages = [...messages, userMsg];
    setMessages([...nextMessages, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
        throw new Error("No response stream.");
      }

      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          const lines = part.split("\n");
          let event = "message";
          let dataLine = "";
          for (const line of lines) {
            if (line.startsWith("event:")) event = line.slice(6).trim();
            if (line.startsWith("data:")) dataLine += line.slice(5).trim();
          }
          if (!dataLine) continue;
          try {
            const data = JSON.parse(dataLine) as {
              text?: string;
              error?: string;
            };
            if (event === "token" && data.text) {
              assistantText += data.text;
              const snapshot = assistantText;
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, content: snapshot } : m)),
              );
            }
            if (event === "error" && data.error) {
              throw new Error(data.error);
            }
          } catch (parseErr) {
            if (parseErr instanceof SyntaxError) continue;
            throw parseErr;
          }
        }
      }

      if (!assistantText.trim()) {
        setMessages((prev) => prev.filter((m) => m.id !== assistantId));
        throw new Error("The model returned an empty response.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Chat failed.";
      setError(message);
      setMessages((prev) =>
        prev.filter((m) => !(m.id === assistantId && m.content.trim().length === 0)),
      );
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void sendPrompt(input);
  }

  function clearChat() {
    setMessages([]);
    setError(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  const promptCard = (
    <form className={styles.promptCard} onSubmit={onSubmit}>
      <label className={styles.srOnly} htmlFor="prompt">
        Ask for an Empower custom field
      </label>
      <textarea
        id="prompt"
        className={styles.promptInput}
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe the custom field you want to create..."
        disabled={busy}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            void sendPrompt(input);
          }
        }}
      />
      <div className={styles.promptToolbar}>
        <div className={styles.toolbarLeft}>
          <span className={styles.toolDot} aria-hidden>
            ⌘
          </span>
          <span>gpt-4.1-mini · library grounded</span>
        </div>
        <button
          className={styles.sendRound}
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );

  return (
    <div className={styles.shell}>
      <header className={styles.nav}>
        <button type="button" className={styles.logo} onClick={clearChat}>
          Empower CF Studio
        </button>
        <div className={styles.navRight}>
          {messages.length > 0 ? (
            <button type="button" className={styles.clearBtn} onClick={clearChat}>
              New chat
            </button>
          ) : null}
        </div>
      </header>

      <main className={styles.main}>
        {empty ? (
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Ask it. Field it.</h1>
            <p className={styles.heroSubtitle}>
              Natural-Language to Empower Custom field Formulas
            </p>
            {promptCard}
            <div className={styles.chips}>
              <button
                type="button"
                className={styles.chip}
                onClick={() => void sendPrompt(EXAMPLE.prompt)}
                disabled={busy}
              >
                {EXAMPLE.label}
              </button>
            </div>
            {error ? (
              <p className={styles.error} style={{ marginTop: "1rem", width: "min(100%, 44rem)" }}>
                {error}
              </p>
            ) : null}
          </section>
        ) : (
          <>
            <section className={styles.threadWrap} aria-live="polite">
              {messages.map((m) => (
                <article
                  key={m.id}
                  className={m.role === "user" ? styles.userBubble : styles.assistantBubble}
                >
                  <div className={styles.bubbleMeta}>
                    <span>{m.role === "user" ? "You" : "Studio"}</span>
                    {m.role === "assistant"
                      ? detectEvidenceBadges(m.content).map((b) => (
                          <span key={b} className={styles.badge}>
                            {b}
                          </span>
                        ))
                      : null}
                  </div>
                  <div>
                    {m.content ? (
                      <pre className={styles.messagePre}>{m.content}</pre>
                    ) : (
                      <span className={styles.caret} />
                    )}
                  </div>
                  {m.role === "assistant" && m.content
                    ? extractFormulas(m.content).map((formula, idx) => (
                        <FormulaCopy key={`${m.id}-${idx}`} formula={formula} />
                      ))
                    : null}
                </article>
              ))}
              <div ref={bottomRef} />
            </section>
            <div className={styles.composerDock}>
              <div className={styles.composerInner}>
                {error ? <p className={styles.error}>{error}</p> : null}
                {promptCard}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function FormulaCopy({ formula }: { formula: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className={styles.formulaBar}>
      <code className={styles.formulaCode}>{formula}</code>
      <button
        type="button"
        className={styles.copyBtn}
        onClick={async () => {
          await navigator.clipboard.writeText(formula);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
