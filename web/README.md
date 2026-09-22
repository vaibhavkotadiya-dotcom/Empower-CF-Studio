# Empower CF Studio

Public, no-login chatbot that drafts Empower CDS custom-field formulas from natural language using the packaged training library in this repository.

Not affiliated with Waters Corporation.

## Local development

```bash
cd web
cp .env.example .env.local
# put OPENAI_API_KEY in .env.local
npm install
npm run dev
```

`predev` / `prebuild` run `npm run sync-knowledge`, which copies `../skills/empower-custom-fields` (plus a MEMORY excerpt) into `web/knowledge/`.

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run sync-knowledge` | Refresh `knowledge/` from the repo skill |
| `npm run dev` | Local Next.js dev server |
| `npm run build` | Production build (syncs knowledge first) |
| `npm start` | Serve the production build |

## Environment variables

| Name | Required | Default | Purpose |
|------|----------|---------|---------|
| `OPENAI_API_KEY` | yes | — | Server-only OpenAI key |
| `OPENAI_MODEL` | no | `gpt-4.1-mini` | Chat model |
| `DAILY_CHAT_LIMIT` | no | `30` | Max `/api/chat` calls per IP per UTC day |
| `OPENAI_MAX_OUTPUT_TOKENS` | no | `2000` | Caps reply length / cost |

## Vercel deploy

1. Import this Git repository in Vercel.
2. Set **Root Directory** to `web`.
3. Framework preset: Next.js (default).
4. Add environment variables:
   - `OPENAI_API_KEY`
   - optional: `OPENAI_MODEL`, `DAILY_CHAT_LIMIT`, `OPENAI_MAX_OUTPUT_TOKENS`
5. Deploy.

The build runs `prebuild` → `sync-knowledge`. The parent folder `skills/empower-custom-fields` must remain in the same repo so the sync script can read it (`../skills/...` from `web/`).

## OpenAI $20 / month budget

In the [OpenAI platform](https://platform.openai.com/):

1. Open the project that owns the API key.
2. Set a **monthly budget of $20** and enable email alerts.
3. Prefer keeping `OPENAI_MODEL=gpt-4.1-mini` for the public demo.

## Abuse controls (v1)

- ~30 chat requests / IP / UTC day (in-memory on the serverless instance; not a perfect global counter across all isolates).
- Conversation history truncated to the last 8 turns sent to the model.
- Max output tokens capped via env.

If abuse appears, upgrade to a shared store (for example Upstash Redis) for global IP limits.

## Knowledge behavior

- Always injects `SKILL.md` + `MEMORY-excerpt.md`.
- Topic router pulls matching lesson/guide files (bracketing RSD, 2489 UV, correlation r, assay, intersample, workbook families, etc.).
- Large transcripts are packaged but not injected unless retrieval selects them within the context budget.
- Public chats do **not** write back into `MEMORY.md` or the skill.

## Model plan

- Default: `gpt-4.1-mini` (cost-fit for public + $20/mo).
- Override with `OPENAI_MODEL` (for example `gpt-4.1`) when you need stronger formula drafting and can afford it.
