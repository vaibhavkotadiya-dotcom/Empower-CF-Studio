# Empower CF Studio

Login-gated chatbot that drafts Empower CDS custom-field formulas from natural language using the packaged training library in this repository.

Not affiliated with Waters Corporation.

## Local development

```bash
cd web
cp .env.example .env.local
# fill AUTH_*, AI provider keys, and model settings
npm install
npm run dev
```

`predev` / `prebuild` run `npm run sync-knowledge`, which copies `../skills/empower-custom-fields` (plus a MEMORY excerpt) into `web/knowledge/`.

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/login`.

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run sync-knowledge` | Refresh `knowledge/` from the repo skill |
| `npm run dev` | Local Next.js dev server |
| `npm run build` | Production build (syncs knowledge first) |
| `npm start` | Serve the production build |

## Environment variables

### Auth (required)

| Name | Example | Purpose |
|------|---------|---------|
| `AUTH_USERS` | `Field@waters.com:Empower@123\|Test@waters.com:Empower@123` | Pipe-separated `email:password` pairs |
| `AUTH_SECRET` | long random string (16+ chars) | Signs the httpOnly session cookie |

### AI provider

| Name | Example | Purpose |
|------|---------|---------|
| `AI_PROVIDER` | `openai` or `openrouter` | Which API to call. If unset, auto-picks from the configured key (prefers OpenAI) |
| `OPENAI_API_KEY` | `sk-...` | Used when provider is OpenAI |
| `OPENAI_MODEL` | `gpt-4.1-mini` | OpenAI model id |
| `OPENROUTER_API_KEY` | `sk-or-...` | Used when provider is OpenRouter |
| `OPENROUTER_MODEL` | `openai/gpt-4.1-mini` | Any OpenRouter model slug |
| `OPENROUTER_SITE_URL` | `https://your-app.vercel.app` | Optional OpenRouter referer header |
| `OPENROUTER_APP_NAME` | `Empower CF Studio` | Optional OpenRouter app title |

### Cost / generation controls

| Name | Default | Purpose |
|------|---------|---------|
| `MODEL_TEMPERATURE` | `0.2` | Sent when the model supports temperature |
| `OPENAI_MAX_OUTPUT_TOKENS` | `2000` | Caps completion length (main cost lever) |
| `DAILY_CHAT_LIMIT` | `30` | Max `/api/chat` calls per IP per UTC day |

If you only set `OPENAI_API_KEY`, the app uses OpenAI automatically. If you only set `OPENROUTER_API_KEY`, it uses OpenRouter. To force one path, set `AI_PROVIDER=openai` or `AI_PROVIDER=openrouter`. After each chat reply, the prompt toolbar shows `provider · model` so you can confirm which key was billed.

## Vercel deploy

1. Root Directory: `web`
2. Framework Preset: **Next.js**
3. Output Directory: leave empty
4. Add the env vars above (auth + provider + cost controls)
5. Redeploy after changing env vars

## Auth and chat history

- Unauthenticated users are redirected to `/login`.
- `/api/chat` requires a valid session cookie.
- Chat history is stored in the browser (`localStorage`) per logged-in email, with a sidebar for past threads and **New chat**.
- History does not sync across devices (no database in this version).

## Knowledge behavior

- Always injects `SKILL.md` + `MEMORY-excerpt.md`.
- Topic router pulls matching lesson/guide files.
- Public chats do **not** write back into `MEMORY.md` or the skill.
