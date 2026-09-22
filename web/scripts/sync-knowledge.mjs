import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(webRoot, "..");
const skillRoot = path.join(repoRoot, "skills", "empower-custom-fields");
const outRoot = path.join(webRoot, "knowledge");

const ALWAYS_COPY = [
  { from: path.join(skillRoot, "SKILL.md"), to: "SKILL.md" },
  { from: path.join(skillRoot, "references", "bracketing-rsd.md"), to: "references/bracketing-rsd.md" },
  {
    from: path.join(skillRoot, "references", "uv-wavelength-maximum-2489.md"),
    to: "references/uv-wavelength-maximum-2489.md",
  },
  {
    from: path.join(skillRoot, "references", "std-level-mean-correlation-r.md"),
    to: "references/std-level-mean-correlation-r.md",
  },
  { from: path.join(skillRoot, "references", "assay-single-area.md"), to: "references/assay-single-area.md" },
  { from: path.join(skillRoot, "references", "guide-field-design.md"), to: "references/guide-field-design.md" },
  {
    from: path.join(skillRoot, "references", "guide-functions-and-operators.md"),
    to: "references/guide-functions-and-operators.md",
  },
  {
    from: path.join(skillRoot, "references", "guide-intersample-calculations.md"),
    to: "references/guide-intersample-calculations.md",
  },
  {
    from: path.join(skillRoot, "references", "guide-worked-examples.md"),
    to: "references/guide-worked-examples.md",
  },
  { from: path.join(skillRoot, "references", "guide-source-map.md"), to: "references/guide-source-map.md" },
  {
    from: path.join(skillRoot, "references", "custom-field-f1-analysis.md"),
    to: "references/custom-field-f1-analysis.md",
  },
  {
    from: path.join(skillRoot, "references", "custom-field-f1-field-catalog.md"),
    to: "references/custom-field-f1-field-catalog.md",
  },
  { from: path.join(skillRoot, "references", "training-template.md"), to: "references/training-template.md" },
];

const LARGE_ON_DEMAND = [
  {
    from: path.join(skillRoot, "references", "source-guide-slide-transcript.md"),
    to: "references/source-guide-slide-transcript.md",
  },
  {
    from: path.join(skillRoot, "references", "source-custom-field-f1.md"),
    to: "references/source-custom-field-f1.md",
  },
  {
    from: path.join(skillRoot, "references", "custom-field-f1-inventory.json"),
    to: "references/custom-field-f1-inventory.json",
  },
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyFile(from, toRel) {
  const to = path.join(outRoot, toRel);
  if (!fs.existsSync(from)) {
    console.warn(`[sync-knowledge] missing source: ${from}`);
    return false;
  }
  ensureDir(to);
  fs.copyFileSync(from, to);
  return true;
}

function excerptMemory() {
  const memoryPath = path.join(repoRoot, "MEMORY.md");
  if (!fs.existsSync(memoryPath)) {
    return "# Project memory excerpt\n\nMEMORY.md was not found at sync time.\n";
  }
  const raw = fs.readFileSync(memoryPath, "utf8");
  const sections = [];
  const objective = raw.match(/## Objective and phase[\s\S]*?(?=\n## )/);
  const confirmed = raw.match(/## Confirmed from the user's lessons[\s\S]*?(?=\n## )/);
  const openQs = raw.match(/## Open questions, in priority order[\s\S]*?(?=\n## )/);
  if (objective) sections.push(objective[0].trim());
  if (confirmed) sections.push(confirmed[0].trim());
  if (openQs) {
    const lines = openQs[0].trim().split("\n").slice(0, 25);
    sections.push(lines.join("\n"));
  }
  return `# Project memory excerpt (sync-generated)\n\n${sections.join("\n\n")}\n`;
}

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(outRoot, { recursive: true });

let copied = 0;
for (const item of ALWAYS_COPY) {
  if (copyFile(item.from, item.to)) copied += 1;
}
for (const item of LARGE_ON_DEMAND) {
  if (copyFile(item.from, item.to)) copied += 1;
}

const memoryOut = path.join(outRoot, "MEMORY-excerpt.md");
fs.writeFileSync(memoryOut, excerptMemory(), "utf8");
copied += 1;

const manifest = {
  syncedAt: new Date().toISOString(),
  always: ALWAYS_COPY.map((x) => x.to),
  onDemand: LARGE_ON_DEMAND.map((x) => x.to),
  memory: "MEMORY-excerpt.md",
};
fs.writeFileSync(path.join(outRoot, "manifest.json"), JSON.stringify(manifest, null, 2));

const skillCheck = path.join(outRoot, "SKILL.md");
if (!fs.existsSync(skillCheck)) {
  console.error("[sync-knowledge] ERROR: SKILL.md was not copied. Check that skills/empower-custom-fields exists next to web/.");
  process.exit(1);
}

console.log(`[sync-knowledge] wrote ${copied} files to ${outRoot}`);
