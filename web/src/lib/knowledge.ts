import fs from "node:fs";
import path from "node:path";

const CONTEXT_BUDGET = 55_000;

export type KnowledgeFile = {
  id: string;
  relPath: string;
  always?: boolean;
  keywords: string[];
};

const CATALOG: KnowledgeFile[] = [
  {
    id: "skill",
    relPath: "SKILL.md",
    always: true,
    keywords: [],
  },
  {
    id: "memory",
    relPath: "MEMORY-excerpt.md",
    always: true,
    keywords: [],
  },
  {
    id: "bracketing",
    relPath: "references/bracketing-rsd.md",
    keywords: ["bracket", "bracketing", "rsd", "%rsd", "s1", "brk"],
  },
  {
    id: "uv2489",
    relPath: "references/uv-wavelength-maximum-2489.md",
    keywords: ["2489", "wavelength", "uv", "pda", "height", "w202", "w242", "w270"],
  },
  {
    id: "correlation",
    relPath: "references/std-level-mean-correlation-r.md",
    keywords: [
      "correlation",
      "pearson",
      "linearity",
      "mean response",
      "ppm",
      "s800",
      "s1600",
      "corr",
      "r value",
      "replicat",
    ],
  },
  {
    id: "amount",
    relPath: "references/amount-empower.md",
    keywords: [
      "amount",
      "standard average",
      "standard_average",
      "sampleweight",
      "sample weight",
      "purity",
      "value field",
      "how amount",
      "calibration",
    ],
  },
  {
    id: "assay",
    relPath: "references/assay-single-area.md",
    keywords: [
      "assay",
      "dilution",
      "dilution_factor",
      "potency",
      "standard_potency",
      "lod",
      "ovi",
      "moisture",
      "mw1",
      "mw2",
      "label_claim",
      "sampleweight",
      "sd1",
      "td1",
    ],
  },
  {
    id: "known-impurity",
    relPath: "references/percentage-known-impurity.md",
    keywords: [
      "known impurity",
      "percentage_known",
      "impurity percent",
      "impurity standard",
      "external standard",
      "rrf",
      "peak label",
      "s1",
      "u1",
      "imp_std",
      "relative response",
    ],
  },
  {
    id: "field-design",
    relPath: "references/guide-field-design.md",
    keywords: ["field type", "data type", "wizard", "peak type", "sample type", "create field"],
  },
  {
    id: "functions",
    relPath: "references/guide-functions-and-operators.md",
    keywords: [
      "enum",
      "boolean",
      "range",
      "round",
      "replace",
      "ccompre",
      "ccalref",
      "cconst",
      "translation",
      "operator",
      "function",
    ],
  },
  {
    id: "intersample",
    relPath: "references/guide-intersample-calculations.md",
    keywords: [
      "intersample",
      "ave(",
      "ave ",
      "%rsd",
      "search order",
      "all or nothing",
      "summarize",
      "label.",
      "same.%",
      "summary",
    ],
  },
  {
    id: "worked-examples",
    relPath: "references/guide-worked-examples.md",
    keywords: ["example", "worked", "pass", "fail", "threshold"],
  },
  {
    id: "source-map",
    relPath: "references/guide-source-map.md",
    keywords: ["guide", "conflict", "training deck", "waters guide"],
  },
  {
    id: "f1-analysis",
    relPath: "references/custom-field-f1-analysis.md",
    keywords: [
      "impurity",
      "workbook",
      "f1",
      "recovery",
      "dissolution",
      "content uniformity",
      "amv",
      "area normalization",
      "loq",
      "rrf",
    ],
  },
  {
    id: "f1-catalog",
    relPath: "references/custom-field-f1-field-catalog.md",
    keywords: ["catalog", "dependency", "field list", "formula list"],
  },
];

function knowledgeRoot(): string {
  return path.join(process.cwd(), "knowledge");
}

function readKnowledge(relPath: string): string | null {
  const full = path.join(knowledgeRoot(), relPath);
  if (!fs.existsSync(full)) return null;
  return fs.readFileSync(full, "utf8");
}

function scoreFile(file: KnowledgeFile, haystack: string): number {
  if (file.always) return 1000;
  let score = 0;
  for (const kw of file.keywords) {
    if (haystack.includes(kw.toLowerCase())) score += kw.length > 4 ? 3 : 2;
  }
  return score;
}

export function selectKnowledgeFiles(userText: string, historyText = ""): KnowledgeFile[] {
  const haystack = `${userText}\n${historyText}`.toLowerCase();
  const scored = CATALOG.map((file) => ({ file, score: scoreFile(file, haystack) }))
    .filter((row) => row.file.always || row.score > 0)
    .sort((a, b) => b.score - a.score);

  const selected: KnowledgeFile[] = [];
  const seen = new Set<string>();

  for (const row of scored) {
    if (seen.has(row.file.id)) continue;
    selected.push(row.file);
    seen.add(row.file.id);
  }

  // Always ensure core guides for formula drafting when nothing topical matched beyond skill/memory
  if (selected.length <= 2) {
    for (const id of ["intersample", "functions", "field-design"]) {
      const file = CATALOG.find((f) => f.id === id);
      if (file && !seen.has(file.id)) {
        selected.push(file);
        seen.add(file.id);
      }
    }
  }

  return selected.slice(0, 8);
}

export function buildKnowledgeContext(userText: string, historyText = ""): {
  context: string;
  selectedIds: string[];
} {
  const files = selectKnowledgeFiles(userText, historyText);
  const parts: string[] = [];
  const selectedIds: string[] = [];
  let used = 0;

  for (const file of files) {
    const body = readKnowledge(file.relPath);
    if (!body) continue;
    const chunk = `\n\n===== FILE: ${file.relPath} =====\n${body}`;
    if (used + chunk.length > CONTEXT_BUDGET) {
      const remaining = CONTEXT_BUDGET - used;
      if (remaining > 2000) {
        parts.push(chunk.slice(0, remaining) + "\n\n[truncated for context budget]\n");
        selectedIds.push(file.id);
      }
      break;
    }
    parts.push(chunk);
    selectedIds.push(file.id);
    used += chunk.length;
  }

  return { context: parts.join(""), selectedIds };
}
