# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Java Interview Hub" — a static React SPA of Java interview questions/answers plus per-topic quizzes, bilingual (Russian source, English overrides), deployed to GitHub Pages. Content is the product: ~13.5k lines of `src/`, of which ~12k is question/quiz data. Almost all work here is data editing, not app logic.

## Commands

All commands run from `interview-questions/` (not the git root — see below):

```bash
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run lint     # eslint
npm run preview  # serve the built dist/
```

There is no test framework and no test script — don't go looking for one. `npm run lint` and `npm run build` are the full check suite, matching CI.

`npm run lint` currently exits clean with 3 warnings. One is intentional: `QuizPage.jsx` lists `attempt` as a `useMemo` dep specifically to force a fresh quiz on retry (`react-hooks/exhaustive-deps` can't see that). Don't "fix" it.

## Repo layout — read this before touching dependencies

The git root is the **parent** directory (`interview-app/`), not `interview-questions/`. Dependencies are split across two `package.json` files, and this is load-bearing:

- `interview-questions/package.json` — react, react-dom, vite, eslint. Has a lockfile; `npm ci` uses it.
- `interview-app/package.json` (git root) — `react-router-dom`, `react-markdown`, `remark-gfm`. **Its `node_modules/` is committed to git** (~102 packages, ~1660 files).

`src/` imports all three of those root-level packages, but they are absent from `interview-questions/package.json`. They resolve only because Node walks up the directory tree into the committed `interview-app/node_modules/`. CI does `npm ci` inside `interview-questions/`, which never installs them — so the checked-in `node_modules/` at the root is the *only* reason the build and deploy work.

Consequences:
- Do not gitignore or delete the root `node_modules/`. It looks like an accident; it is currently the dependency source for routing and markdown rendering. Removing it breaks `npm run build` and the Pages deploy.
- Adding a router/markdown-adjacent dependency the same way means committing its `node_modules/` tree too. Prefer instead to declare the dep properly in `interview-questions/package.json` and let the lockfile carry it.
- If you consolidate this (a reasonable cleanup: move the three deps into `interview-questions/package.json`, regenerate the lockfile, untrack root `node_modules/`), do it as a deliberate, self-contained change and verify `npm ci && npm run build` from a clean checkout — not as a drive-by.

## Architecture

**Routing** (`App.jsx`): react-router v7 `BrowserRouter` with `basename={import.meta.env.BASE_URL}`. Four routes — home, `/category/:categoryId`, `/category/:categoryId/question/:questionId`, `/category/:categoryId/quiz` — with `*` redirecting home. Pages `<Navigate to="/" replace />` on unknown ids rather than 404ing.

**`categoryId` is the join key across the whole app.** The same string identifies a category in `questions.js`, its English overrides in `content.en.js`, and its quiz bank in `quizzes.js`. Get it wrong and content silently falls back or the quiz link disappears (`hasQuiz` gates it).

### Content pipeline (`src/data/`)

Russian is the source of truth; English is an override layer that degrades gracefully.

- `questions.js` — the canonical `categories` array: `{ id, title, icon, description, questions: [{ id, question, answer }] }`. Answers are markdown template literals (fenced code blocks included), rendered by `react-markdown` + `remark-gfm`.
- `content.en.js` — `enContent[categoryId]` with optional `title` / `description` / `questions[questionId]`.
- `localized.js` — merges the two. `getCategories` / `getCategory` / `getQuestion(categoryId, questionId, lang)`; the last also returns `prev`/`next` for question navigation. Anything without an English override is returned as Russian with `translated: false`, which drives the "only available in Russian" note and keeps speech synthesis in Russian for that answer. **English translation is intentionally partial — untranslated content is a normal state, not a bug.**

Pages never import `questions.js` or `content.en.js` directly; they go through `localized.js`. Keep it that way.

### Quizzes (`src/data/quiz/*.js` → `quizzes.js`)

Per-topic banks are grouped by subject area into files (`jvm.js`, `frameworks.js` = Spring + Hibernate, `infra.js` = Kafka + microservices + AWS, `toolsQuality.js` = testing/logging/UML/XML/build/git, etc.), then mapped to category ids in `quizzes.js`. The `oop` bank is defined inline in `quizzes.js` rather than extracted — the odd one out.

The shape is a **slot/variant** model:

```js
{ id: 'slot-id', variants: [ { question, options: [...], correct: 0 }, ... ] }
```

`buildQuiz(categoryId)` picks one random variant per slot, shuffles slot order, and shuffles each variant's options into `{ text, isCorrect }`. So `correct` is an index into the *authored* `options` array and is meaningless after shuffling — always read `isCorrect`, never a stored index. Authored data conventionally puts the right answer at index 0; that's fine and invisible to users.

Quizzes are **Russian-only** — they don't go through `localized.js` and ignore the language setting.

### i18n (`src/i18n/`)

`LanguageContext` holds `lang` (`'ru' | 'en'`), persisted to `localStorage['interview-hub-lang']`, and syncs `document.documentElement.lang`. UI chrome strings live in `translations.js` via `t(lang, key)`, which falls back to Russian then to the key itself. Content strings do *not* live here — they're in the data layer above.

### SpeechPlayer

Reads answers aloud via the Web Speech API; returns `null` when unsupported. Two non-obvious workarounds worth preserving: text is chunked to ~200 chars because Chrome truncates long utterances at ~15s, and markdown is stripped to plain text first, with code blocks replaced by a spoken "a code example follows" phrase rather than read literally. Voices are scored to prefer neural/online voices over robotic local ones, and the choice persists per content language.

## Adding content

- **Question**: add to the category's `questions` array in `questions.js`. Optionally add the same `questionId` under `enContent[categoryId].questions` in `content.en.js`; skipping it is fine.
- **Quiz slot**: add to the topic's bank. 2+ variants per slot is the norm; each variant needs 4 options and a `correct` index.
- **New topic**: add a category to `questions.js`, then (optionally) a bank in `src/data/quiz/` wired into the `quizzes` map under the identical id. Without a map entry the topic simply has no quiz link.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` with `GITHUB_PAGES=true`, which switches Vite's `base` to `/interview-app/` (see `vite.config.js`). It then copies `dist/index.html` to `dist/404.html` as the SPA fallback, since Pages has no server-side rewrite — that copy is what makes deep links work. `ci.yml` runs lint + build on PRs to `main`.

A local `dist/` may be present but is gitignored and never served — Pages deploys the CI-built artifact.
