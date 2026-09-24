"use client";

import { useState, type ReactNode } from "react";
import styles from "./chat.module.css";

type HelpId = "what" | "how" | "ask";

const TOPICS: {
  id: HelpId;
  label: string;
  title: string;
  body: ReactNode;
}[] = [
  {
    id: "what",
    label: "What is it?",
    title: "What is Empower CF Studio?",
    body: (
      <>
        <p>
          A login-gated assistant that turns a plain-English Empower custom-field
          request into a draft formula and wizard settings.
        </p>
        <p>
          Answers are grounded in a packaged training library—not live Empower
          and not a Waters Corporation product page. Evidence labels such as
          draft vs Empower-tested are shown when the library supports them.
        </p>
        <p>Chats do not write new lessons back into the library.</p>
      </>
    ),
  },
  {
    id: "how",
    label: "How to use it?",
    title: "How to use it",
    body: (
      <ol>
        <li>
          You are already signed in—use the prompt box under{" "}
          <strong>Ask it. Field it.</strong>
        </li>
        <li>
          Describe the custom field you need in natural language, then press{" "}
          <strong>Enter</strong> or the send button.
        </li>
        <li>
          Read the reply in order: Understanding → Formula → Wizard table →
          Sample-set notes → Evidence / questions.
        </li>
        <li>
          Copy the formula into Empower and match the wizard settings from the
          table.
        </li>
        <li>
          Use the left sidebar for past chats. Click <strong>New chat</strong>{" "}
          when you switch topics. <strong>Logout</strong> when finished.
        </li>
      </ol>
    ),
  },
  {
    id: "ask",
    label: "How to ask?",
    title: "How to ask so you get good answers",
    body: (
      <>
        <p>Include what you know:</p>
        <ul>
          <li>What to calculate (assay, %RSD, impurity, variation, …)</li>
          <li>Field type: Peak, Sample, Result, or Component</li>
          <li>Labels and injections (e.g. same Label, one injection per row)</li>
          <li>Any existing field it builds on (e.g. Assay_Single_Area)</li>
        </ul>
        <p className={styles.helpExample}>
          Example: “%Variation of Assay_Single_Area for two sample rows with the
          same Label, one injection each — use |Assay1−Assay2|/mean×100.”
        </p>
      </>
    ),
  },
];

export function HelpTopics() {
  const [openId, setOpenId] = useState<HelpId | null>(null);
  const open = TOPICS.find((t) => t.id === openId) ?? null;

  return (
    <div className={styles.helpBlock}>
      <div className={styles.chips} role="tablist" aria-label="Studio help">
        {TOPICS.map((topic) => {
          const active = openId === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`${styles.chip} ${active ? styles.chipActive : ""}`}
              onClick={() => setOpenId(active ? null : topic.id)}
            >
              {topic.label}
            </button>
          );
        })}
      </div>
      {open ? (
        <article className={styles.helpPanel} aria-live="polite">
          <header className={styles.helpPanelHead}>
            <h2 className={styles.helpPanelTitle}>{open.title}</h2>
            <button
              type="button"
              className={styles.helpClose}
              onClick={() => setOpenId(null)}
              aria-label="Close help"
            >
              Close
            </button>
          </header>
          <div className={styles.helpPanelBody}>{open.body}</div>
        </article>
      ) : null}
    </div>
  );
}

export function WatersMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src="/waters-mark.svg"
      alt="Waters"
      width={28}
      height={28}
      decoding="async"
    />
  );
}
