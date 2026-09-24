"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { HelpTopics, WatersMark } from "./HelpTopics";
import { MarkdownMessage } from "./MarkdownMessage";
import styles from "./chat.module.css";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

type Thread = {
  id: string;
  title: string;
  updatedAt: number;
  messages: Message[];
};

function threadsKey(email: string): string {
  return `empower-cf-studio:${email.toLowerCase()}:threads`;
}

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

function titleFromMessages(messages: Message[]): string {
  const firstUser = messages.find((m) => m.role === "user" && m.content.trim());
  if (!firstUser) return "New chat";
  const t = firstUser.content.trim().replace(/\s+/g, " ");
  return t.length > 42 ? `${t.slice(0, 42)}…` : t;
}

function loadThreads(email: string): Thread[] {
  try {
    const raw = localStorage.getItem(threadsKey(email));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Thread[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((t) => t && typeof t.id === "string" && Array.isArray(t.messages))
      .map((t) => ({
        id: t.id,
        title: t.title || "New chat",
        updatedAt: typeof t.updatedAt === "number" ? t.updatedAt : Date.now(),
        messages: t.messages.slice(-80),
      }))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
}

function saveThreads(email: string, threads: Thread[]) {
  localStorage.setItem(threadsKey(email), JSON.stringify(threads.slice(0, 40)));
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
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [authReady, setAuthReady] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLElement>(null);
  const hydrated = useRef(false);

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeId) ?? null,
    [threads, activeId],
  );
  const messages = activeThread?.messages ?? [];
  const empty = messages.length === 0;
  const lastMessageContent = messages[messages.length - 1]?.content ?? "";

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.replace("/login");
          return;
        }
        const data = (await res.json()) as { email?: string };
        if (!data.email) {
          router.replace("/login");
          return;
        }
        if (cancelled) return;
        setEmail(data.email);
        const loaded = loadThreads(data.email);
        if (loaded.length === 0) {
          const fresh: Thread = {
            id: uid(),
            title: "New chat",
            updatedAt: Date.now(),
            messages: [],
          };
          setThreads([fresh]);
          setActiveId(fresh.id);
        } else {
          setThreads(loaded);
          setActiveId(loaded[0]!.id);
        }
        setAuthReady(true);
        hydrated.current = true;
      } catch {
        router.replace("/login");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (!hydrated.current || !email) return;
    try {
      saveThreads(email, threads);
    } catch {
      /* ignore */
    }
  }, [threads, email]);

  useEffect(() => {
    const thread = threadRef.current;
    if (thread) {
      thread.scrollTop = thread.scrollHeight;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, lastMessageContent, busy]);

  function updateActiveMessages(updater: (prev: Message[]) => Message[]) {
    if (!activeId) return;
    setThreads((prev) =>
      prev.map((t) => {
        if (t.id !== activeId) return t;
        const nextMessages = updater(t.messages);
        return {
          ...t,
          messages: nextMessages,
          title: titleFromMessages(nextMessages),
          updatedAt: Date.now(),
        };
      }),
    );
  }

  function startNewChat() {
    const fresh: Thread = {
      id: uid(),
      title: "New chat",
      updatedAt: Date.now(),
      messages: [],
    };
    setThreads((prev) => [fresh, ...prev]);
    setActiveId(fresh.id);
    setError(null);
    setInput("");
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  async function sendPrompt(prompt: string) {
    const trimmed = prompt.trim();
    if (!trimmed || busy || !activeId) return;

    setError(null);
    const userMsg: Message = { id: uid(), role: "user", content: trimmed };
    const assistantId = uid();
    const current = threads.find((t) => t.id === activeId);
    const nextMessages = [...(current?.messages ?? []), userMsg];

    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeId
          ? {
              ...t,
              messages: [...nextMessages, { id: assistantId, role: "assistant", content: "" }],
              title: titleFromMessages(nextMessages),
              updatedAt: Date.now(),
            }
          : t,
      ),
    );
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

      if (res.status === 401) {
        router.replace("/login");
        throw new Error("Session expired. Please log in again.");
      }

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        updateActiveMessages((prev) => prev.filter((m) => m.id !== assistantId));
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      const reader = res.body?.getReader();
      if (!reader) {
        updateActiveMessages((prev) => prev.filter((m) => m.id !== assistantId));
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
            const data = JSON.parse(dataLine) as { text?: string; error?: string };
            if (event === "token" && data.text) {
              assistantText += data.text;
              const snapshot = assistantText;
              updateActiveMessages((prev) =>
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
        updateActiveMessages((prev) => prev.filter((m) => m.id !== assistantId));
        throw new Error("The model returned an empty response.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Chat failed.";
      setError(message);
      updateActiveMessages((prev) =>
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
        disabled={busy || !authReady}
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
          <span>library grounded</span>
        </div>
        <button
          className={styles.sendRound}
          type="submit"
          disabled={busy || !input.trim() || !authReady}
          aria-label="Send"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );

  if (!authReady) {
    return (
      <div className={styles.shell}>
        <div className={styles.loading}>Loading…</div>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarTop}>
          <button type="button" className={styles.newChatBtn} onClick={startNewChat}>
            New chat
          </button>
        </div>
        <div className={styles.threadList}>
          {threads.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`${styles.threadItem} ${t.id === activeId ? styles.threadItemActive : ""}`}
              onClick={() => {
                setActiveId(t.id);
                setError(null);
              }}
            >
              {t.title || "New chat"}
            </button>
          ))}
        </div>
        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarBrand}>
            <WatersMark className={styles.watersMarkSm} />
            <span className={styles.userEmail} title={email ?? ""}>
              {email}
            </span>
          </div>
          <button type="button" className={styles.logoutBtn} onClick={() => void logout()}>
            Logout
          </button>
        </div>
      </aside>

      <div className={styles.mainColumn}>
        <header className={styles.nav}>
          <div className={styles.navLeft}>
            <button
              type="button"
              className={styles.menuBtn}
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label="Toggle history"
            >
              ☰
            </button>
            <button type="button" className={styles.brandLockup} onClick={startNewChat}>
              <WatersMark className={styles.watersMark} />
              <span className={styles.logo}>Empower CF Studio</span>
            </button>
          </div>
          <div className={styles.navRight}>
            <button type="button" className={styles.clearBtn} onClick={startNewChat}>
              New chat
            </button>
          </div>
        </header>

        <main className={empty ? styles.mainEmpty : styles.mainChat}>
          {empty ? (
            <section className={styles.hero}>
              <h1 className={styles.heroTitle}>Ask it. Field it.</h1>
              <p className={styles.heroSubtitle}>Natural-Language to Empower Custom field Formulas</p>
              {promptCard}
              <HelpTopics />
              {error ? (
                <p className={styles.error} style={{ marginTop: "1rem", width: "min(100%, 44rem)" }}>
                  {error}
                </p>
              ) : null}
            </section>
          ) : (
            <>
              <section ref={threadRef} className={styles.threadWrap} aria-live="polite">
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
                        m.role === "assistant" ? (
                          <MarkdownMessage content={m.content} />
                        ) : (
                          <pre className={styles.messagePre}>{m.content}</pre>
                        )
                      ) : (
                        <span className={styles.caret} />
                      )}
                    </div>
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
    </div>
  );
}
