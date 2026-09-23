"use client";

import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./chat.module.css";

function CopyCodeButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className={styles.mdCopyBtn}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ children, className }: { children: ReactNode; className?: string }) {
  const text = String(children).replace(/\n$/, "");
  const language = className?.replace(/^language-/, "") || "";
  return (
    <div className={styles.mdCodeWrap}>
      <div className={styles.mdCodeHead}>
        <span className={styles.mdCodeLang}>{language || "formula"}</span>
        <CopyCodeButton text={text} />
      </div>
      <pre className={styles.mdPre}>
        <code className={className}>{text}</code>
      </pre>
    </div>
  );
}

export function MarkdownMessage({ content }: { content: string }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className={styles.mdH1}>{children}</h1>,
          h2: ({ children }) => <h2 className={styles.mdH2}>{children}</h2>,
          h3: ({ children }) => <h3 className={styles.mdH3}>{children}</h3>,
          p: ({ children }) => <p className={styles.mdP}>{children}</p>,
          ul: ({ children }) => <ul className={styles.mdUl}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.mdOl}>{children}</ol>,
          li: ({ children }) => <li className={styles.mdLi}>{children}</li>,
          strong: ({ children }) => <strong className={styles.mdStrong}>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
          a: ({ href, children }) => (
            <a className={styles.mdLink} href={href} target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
          hr: () => <hr className={styles.mdHr} />,
          blockquote: ({ children }) => (
            <blockquote className={styles.mdQuote}>{children}</blockquote>
          ),
          table: ({ children }) => (
            <div className={styles.mdTableWrap}>
              <table className={styles.mdTable}>{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className={styles.mdThead}>{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr className={styles.mdTr}>{children}</tr>,
          th: ({ children }) => <th className={styles.mdTh}>{children}</th>,
          td: ({ children }) => <td className={styles.mdTd}>{children}</td>,
          code: ({ className, children, ...props }) => {
            const isBlock = Boolean(className) || String(children).includes("\n");
            if (isBlock) {
              return <CodeBlock className={className}>{children}</CodeBlock>;
            }
            return (
              <code className={styles.mdInlineCode} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
