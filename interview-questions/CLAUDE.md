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

`npm test` runs checks on **Node's built-in runner** (`node --test` over `src/data/data-integrity.test.js` + `src/data/suggestions.test.js`) — no test framework/deps added on purpose (item 1); to add a suite, append its file to the `test` script. `data-integrity` imports the RU/EN barrels directly (not the manifest) and guards duplicate questions, id drift across the 3 data files, and malformed quiz slots; `suggestions` unit-tests the anti-spam helpers (validation/link-count/cooldown/visibility — pure, no network). `npm run lint` + `npm test` + `npm run build` are the full check suite, matching CI. (`npm run build`/`dev` regenerate `content-manifest.js` first via the `pre*` hooks.)

`npm run lint` exits with 0 errors and ~8 warnings, all expected: one intentional in `QuizPage.jsx` (`attempt` listed as a `useMemo` dep to force a fresh quiz on retry — `react-hooks/exhaustive-deps` can't see that; don't "fix" it), and the rest are `react-refresh/only-export-components` on context/provider files that export a hook alongside the component. New warnings are the signal to check — the count itself isn't.

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

- `questions.js` — a **barrel** that assembles the canonical `categories` array. Each category lives in its own file under `questions/<categoryId>.js` (e.g. `questions/kafka.js`) exporting `export const <camelCaseId> = { id, title, icon, description, questions: [{ id, question, answer }] }`; the barrel imports them and lists them in the array **in display order** (that order drives the home page). Answers are markdown template literals (fenced code blocks included), rendered by `react-markdown` + `remark-gfm`. `questions.js` also still exports `getCategory` / `getQuestion`.
- `content.en.js` — a **barrel** for `enContent[categoryId]`. Each category's English overrides live in `content-en/<categoryId>.js` exporting `export const <camelCaseId> = { title?, description?, questions? }`; the barrel maps them (hyphenated ids like `'java-core'` are quoted keys → `javaCore` var).
- To add/edit content: edit the per-category file. A **new category** also needs one line in each barrel (an import + a slot in the array/object) and — if it has a quiz — a `quizzes.js` map entry. Category id is the filename and the join key; keep the RU file, EN file, and quiz all under the same id.
- `localized.js` — merges RU + EN. `getCategories` / `getCategory` / `getQuestion(categoryId, questionId, lang)`; the last also returns `prev`/`next` for question navigation. Anything without an English override is returned as Russian with `translated: false`, which drives the "only available in Russian" note and keeps speech synthesis in Russian for that answer. **English translation is intentionally partial — untranslated content is a normal state, not a bug.**

**Content is split into a light layer and a heavy layer (code splitting, item 9). Understand this before touching the data flow:**
- Only three consumers ever read a question's `answer` — `QuestionPage`, `ReviewSessionPage`, and the search index. Everything else needs no more than category meta + question text.
- `src/data/content-manifest.js` is **auto-generated** (committed) by `scripts/gen-content-manifest.mjs`, wired into `predev`/`prebuild` (also `npm run gen:manifest`). It is the RU/EN barrels with every `answer` stripped: category meta + question text only. Don't hand-edit it — edit the per-category source files and it regenerates. A stale manifest shows up as a git diff after a build.
- `localized.js`'s **synchronous** API (`getCategories`/`getCategory`/`getQuestion`) reads from the manifest, so those questions have **no `answer` field**. Answers are the **heavy** layer, lazy-loaded per category via `import.meta.glob` through async loaders: `loadAnswer(categoryId, questionId, lang)`, `loadCategoryFull`, `loadAllFull`. If you need an answer in a component, `await` a loader — don't expect it on the sync objects.
- Consequence: **the app never imports `questions.js` / `content.en.js` anymore** — only the manifest generator and the Node tests do. Each `questions/<id>.js` is dynamic-imported into its own lazy chunk; the barrels + `content-manifest.js` are the only places that know the full category list. Route components are `React.lazy` in `App.jsx` (landing page eager). Keep the light/heavy seam intact: putting `answer` back on the sync path re-inflates first load to the old ~1.8 MB single chunk.

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

- **Question**: add to the `questions` array in `src/data/questions/<categoryId>.js`. Optionally add the same `questionId` under `questions` in `src/data/content-en/<categoryId>.js` (the English override); skipping it is fine — untranslated is a normal state.
- **Optional taxonomy (item 14)**: a question may carry `difficulty` (`'easy'|'medium'|'hard'`), `tags: []` (lowercase tokens), and `related: []` (each a bare question id = same category, or `'categoryId/questionId'` = cross‑category). All optional and language‑neutral (authored on the RU source, carried through the light manifest like `subtopic`); untagged questions stay valid and just show no badge / no filter bar. Allowed difficulty values live in `src/data/taxonomy.js`; the data‑integrity test guards the shape. Only `oop` is backfilled so far.
- **Quiz slot**: add to the topic's bank in `src/data/quiz/`. 2+ variants per slot is the norm; each variant needs 4 options and a `correct` index.
- **New topic**: create `src/data/questions/<id>.js` (exporting the category object), wire it into the `questions.js` barrel (import + a slot in the `categories` array at the desired position). Optionally add `src/data/content-en/<id>.js` wired into the `content.en.js` barrel, and a quiz bank in `src/data/quiz/` wired into the `quizzes` map — all under the identical `<id>`. Without the barrel wiring the category is invisible; without the `quizzes` entry the topic simply has no quiz link.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` with `GITHUB_PAGES=true`, which switches Vite's `base` to `/interview-app/` (see `vite.config.js`). It then copies `dist/index.html` to `dist/404.html` as the SPA fallback, since Pages has no server-side rewrite — that copy is what makes deep links work. `ci.yml` runs lint + build on PRs to `main`.

A local `dist/` may be present but is gitignored and never served — Pages deploys the CI-built artifact.
