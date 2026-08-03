# Improvements Roadmap

A living, step-by-step plan to make Java Interview Hub the best interview‑prep app
in its niche. We implement items **one at a time**, each on its own branch, each
verified before moving on.

## How to use this doc

- Work **top to bottom** within a phase; phases are ordered by leverage.
- For each item, tick the checkbox when merged and update **Status**.
- Every item is a **self‑contained change** on its own branch → PR into `develop`.
- **Definition of done for every item:** `npm run lint` + `npm run build` pass with
  no new errors, `npm test` is green, and the change is verified in the running app
  (`npm run preview`).

## Guiding principles

- **Stay static / no backend** wherever possible — state lives in `localStorage`
  (language, theme, progress, voice). The app deploys to GitHub Pages.
  - **Known, deliberate exception:** _suggestions_ (item 5-adjacent) now use a shared
    **Firestore** backend over REST instead of `localStorage`, so proposed questions
    are visible to every visitor. This trades the "no backend" principle for a real
    shared list — which is why item 13 (moderation/anti‑spam) is now active, not future.
- **Bilingual by default** — any new UI string goes through `t(lang, key)` in
  `translations.js` with RU + EN.
- **Content is the product** — don't regress the data pipeline
  (`questions/*` + `content-en/*` → barrels → `localized.js`).
- **Small, verifiable steps** — prefer several small PRs over one big one.

Legend — Effort: **S** ≈ <½ day · **M** ≈ ½–1 day · **L** ≈ multi‑day.
Status: `todo` / `in‑progress` / `done`.

---

## Phase 1 — Foundation & quick wins

Low risk, high leverage. Do the tests first — they protect everything after.

### [x] 1. Data‑integrity tests  ·  Effort: S  ·  Status: done
- **Why:** No test framework existed; this session alone we hit duplicate questions,
  id misalignment across the 3 data files, and a `${}` escaping bug that broke the
  build. Tests catch these automatically and forever.
- **Done:** Used **Node's built‑in test runner** (`node:test` + `node:assert`) instead
  of Vitest — zero new dependencies, so the fragile split `package.json` / committed
  root `node_modules` situation is untouched (revisit Vitest if/when we need DOM/component
  tests). Suite in `src/data/data-integrity.test.js` (`npm test` → `node --test`), covering:
  unique category ids; unique + well‑formed question ids per category; **no duplicate
  question text**; English overrides reference only real categories/questions; quiz banks
  well‑formed (valid `correct` index, ≥2 options); `buildQuiz(cat)` yields exactly one
  correct option per question. Also added `.js` extensions to `quizzes.js`'s quiz imports
  so Node resolves them (Vite already accepted both). Wired a `test` job into `ci.yml`.
- **Verified:** 7/7 green; injecting a duplicate id makes the suite fail as expected.

### [x] 2. Syntax highlighting in answers  ·  Effort: S  ·  Status: done
- **Why:** Answers are full of Java/YAML/SQL/bash, but `react-markdown` + `remark-gfm`
  rendered code as plain text. Highlighting is a big readability win for a code‑heavy app.
- **Done:** Added `rehype-highlight` (declared properly in `interview-questions/package.json`
  per CLAUDE.md, not the root `node_modules` hack) and wired it into the `QuestionPage`
  renderer with `{ ignoreMissing: true }` so unknown languages (e.g. `hcl`) degrade to
  plain code instead of erroring. Wrote a compact **GitHub‑dark** token theme in `App.css`
  (the code block bg is already dark, so it reads well in both app themes — dark‑mode ready
  for item 3). Speech is unaffected (it strips code from the raw markdown, not the DOM).
- **Verified:** Java block → `language-java`, keywords/strings/class/function tokens
  colored; Terraform `hcl` block renders plain without crashing; lint/test/build green.
- **Note:** `npm install` surfaced 6 pre‑existing high‑severity advisories in the ESLint
  toolchain (`brace-expansion`→`minimatch`), unrelated to this dep; the fix is a breaking
  eslint downgrade → left for a dedicated dependency‑maintenance pass.

### [x] 3. Dark mode  ·  Effort: S  ·  Status: done
- **Why:** `index.css` hardcoded `color-scheme: light`; a dark theme is expected and
  easy given the CSS‑variable palette already in place.
- **Done:** `ThemeContext` (`src/theme/ThemeContext.jsx`) + `ThemeSwitcher` toggle mirroring
  `LanguageSwitcher`; persisted to `localStorage['interview-hub-theme']`, defaulting to
  `prefers-color-scheme`. Dark values defined for the existing `--color-*` variables; the
  code‑highlight theme reads well in both (its bg was already dark). String via `t(lang,'themeToggle')`.
- **Verified:** Toggle persists across reloads; both themes readable incl. code blocks.

### [x] 4. Global search + `Cmd/Ctrl+K`  ·  Effort: S  ·  Status: done
- **Why:** The original search was home‑only. Make it reachable everywhere with a
  keyboard shortcut — the expected "quick search" UX.
- **Done:** Command‑palette overlay driven by `SearchProvider` + `SearchTrigger`
  (`src/components/`), mounted in the top‑controls bar so it's available on every route.
  `Cmd/Ctrl+K` opens & focuses; `Esc` closes; arrow‑key navigation of results; reuses the
  title+category+answer index/ranking. The home‑only hero search was removed in favour of
  this single UI (see commits a7f3243 / 8ba773e).
- **Verified:** Shortcut works on any page; keyboard‑navigable.

---

## Phase 2 — Study features (core product value)

Turn the reference site into a tool people return to. All `localStorage`‑backed.

### [x] 5. Study‑progress tracking  ·  Effort: M  ·  Status: done
- **Why:** Highest user value. Right now every visit starts from zero.
- **Done:** `localStorage` store in `src/data/progress.jsx` (`ProgressProvider` + `useProgress`
  hook), keyed under `interview-hub-progress`:
  - **mark as known / needs review** toggle per question;
  - **bookmark / favorite** toggle;
  - per‑category **progress bar** (`ProgressBar` component) on the home cards;
  - **"Bookmarks"** (`/bookmarks`) and **"Needs review"** (`/review`) views via a shared
    `StudyListPage`, plus a **clear‑all progress** action.
- **Verified:** State persists; counts update live; clear‑all works; no backend.

### [x] 6. Random question & "Question of the day"  ·  Effort: S  ·  Status: done
- **Why:** Cheap, encourages casual/daily review.
- **Done:** Helper `src/data/daily.js` — flat list of all category/question pairs;
  `getRandomQuestionPath()` for the `/random` route (`RandomPage` → `<Navigate replace />`),
  `getQuestionOfTheDay(lang)` — deterministic date-seeded hash pick, localized via
  `getQuestion`. Home page gets a "🎲 Random question" pill in the study nav and a
  "✨ Question of the day" card linking to the picked question. Strings via
  `t(lang, 'randomQuestion' | 'qotdTitle')` (RU + EN).
- **Verified:** QotD stable within a day and shown on home; `/random` lands on a valid
  question; lint/test/build green; checked in `npm run preview`.

### [ ] 7. Quiz history & "review wrong answers"  ·  Effort: M  ·  Status: todo
- **Why:** Quizzes are currently stateless — results vanish on reload.
- **Approach:** Persist each attempt (category, score, timestamp, wrong slot ids) to
  `localStorage`; show a history panel per category; add a **"review wrong answers"** flow
  that revisits the questions behind the missed slots. Respect the existing slot/variant
  shuffle model (read `isCorrect`, never a stored index).
- **Files:** `src/data/quizHistory.js`, `QuizPage`/results view, category page panel.
- **Acceptance:** History persists; review flow links to the right questions.

### [ ] 8. Spaced‑repetition review mode  ·  Effort: M  ·  Status: todo
- **Why:** The proven way to actually retain interview material; builds on item 5.
- **Approach:** Lightweight SM‑2‑style scheduling in `localStorage` (per question:
  ease, interval, due date). A **"Review"** page serves due questions as flashcards
  (question → reveal answer → rate again/hard/good/easy). Keep it simple; no backend.
- **Files:** extend `progress.jsx` with scheduling, new `ReviewPage` + route, flashcard UI.
- **Acceptance:** Due queue works; ratings reschedule; survives reloads.

---

## Phase 3 — Performance & reach

### [ ] 9. Lazy‑load category data (code splitting)  ·  Effort: M  ·  Status: todo
- **Why:** Build warns the JS chunk is >1 MB because all 316 answers ship up front.
  The per‑category split we just did makes per‑route lazy loading natural.
- **Approach:** Dynamic‑import a category's data only when its route is visited
  (`import('./questions/kafka.js')`), keeping the home page light (it needs only
  id/title/icon/description/count — consider a tiny generated manifest for the grid).
  Also `React.lazy` the page components. Measure before/after bundle sizes.
- **Files:** `localized.js` (async accessors) or a data‑loader layer, `App.jsx` routes,
  possibly a build step emitting a categories manifest.
- **Acceptance:** First‑load JS drops materially; navigation still instant; no data regressions.

### [ ] 10. PWA / offline  ·  Effort: M  ·  Status: todo
- **Why:** Content is static and `SpeechPlayer` already handles offline voices — perfect
  for studying on a commute; also makes it installable.
- **Approach:** `vite-plugin-pwa` (Workbox) — precache the shell + data, offline fallback,
  install prompt, manifest/icons. Verify GitHub Pages `base` path is respected.
- **Files:** `vite.config.js`, manifest + icons, deploy workflow if needed.
- **Acceptance:** Installable; works offline after first load; Pages deploy unaffected.

### [ ] 11. Prerender to static HTML (SSG)  ·  Effort: L  ·  Status: todo
- **Why:** It's a client‑rendered SPA, so individual questions aren't well indexed or
  link‑previewable. Prerendering gives every question a real static page.
- **Approach:** Add a prerender/SSG step (e.g. `vite-plugin-ssg` or a puppeteer prerender
  over all `/category/:c/question/:q` routes) emitting static HTML + per‑page `<title>`/
  Open Graph meta. Must stay compatible with the Pages `base` + 404 SPA fallback.
- **Files:** build config, meta helper, deploy workflow.
- **Acceptance:** Question URLs return prerendered HTML with correct meta; SPA still works.

---

## Phase 4 — Tech‑debt, infra & content

### [ ] 12. Resolve the dependency hack  ·  Effort: M  ·  Status: todo
- **Why:** CLAUDE.md flags it: routing/markdown deps resolve only via a **committed
  `node_modules/` at the git root** + a split `package.json`. Fragile and surprising.
  (item 2's `rehype-highlight` was already declared the right way, in
  `interview-questions/package.json` — follow that pattern here.)
- **Approach:** Move `react-router-dom` / `react-markdown` / `remark-gfm` (+ new deps)
  into `interview-questions/package.json`, regenerate the lockfile, untrack the root
  `node_modules/`. Verify `npm ci && npm run build` from a **clean checkout** and that
  the Pages deploy still works. Do it as one deliberate PR.
- **Files:** both `package.json`s, lockfile, root `.gitignore`, CI.
- **Acceptance:** Clean `npm ci` builds with no reliance on committed root modules.

### [ ] 13. Suggestions: moderation & anti‑spam  ·  Effort: M  ·  Status: todo (now active)
- **Why:** Suggestions ship on a **public Firestore write** with manual console‑only
  moderation (see `src/data/suggestions.js`). This is live in the app now, so the spam
  risk is real, not hypothetical — this item is no longer "future".
- **Approach:** Options, pick per appetite: (a) premoderation (`approved:false` +
  read rule shows only approved), (b) rate limiting / hCaptcha, (c) an owner‑auth admin
  delete (Firebase Auth) to moderate from within the app.
- **Files:** `src/data/suggestions.js`, Firestore rules, suggest/suggestions pages.
- **Acceptance:** Spam can't trivially fill the public list; owner can moderate.

### [ ] 14. Content depth: tags, difficulty, cross‑links  ·  Effort: L  ·  Status: todo
- **Why:** Enables filtering ("show only hard", "show Spring + concurrency"), related‑
  question navigation, and better study targeting.
- **Approach:** Add optional `tags: []` and `difficulty` to the question shape (data
  files), surface as filter chips + badges; add optional `related: [ids]` for cross‑links
  at the bottom of an answer. Backfill incrementally — untranslated/untagged stays valid.
- **Files:** question data files, category/question pages, filter UI, tests (item 1) updated.
- **Acceptance:** Filtering works; tags/difficulty optional (no big‑bang backfill required).

### [ ] 15. Remaining Notion content  ·  Effort: M  ·  Status: todo
- **Why:** System Design (5 write‑ups) and Algorithms weren't imported — they're prose/
  design‑docs, not clean Q&A.
- **Approach:** Decide format: reshape into Q&A where possible, or add a distinct
  "System Design" article/long‑form section that doesn't force the question/answer + quiz
  mold. Keep the data pipeline consistent.
- **Files:** new category/section data + EN + (optional) quiz, or a new content type.
- **Acceptance:** Content is captured without degrading the Q&A/quiz experience.

---

## Suggested next three

1. **Item 13 — suggestions moderation/anti‑spam** (now live on public Firestore → real risk).
2. **Item 12 — resolve the dependency hack** (removes the app's most fragile foundation).
3. **Item 7 — quiz history & review wrong answers** (next study‑feature increment).

_Phase 1 (items 1–4), item 5 and item 6 are done. Suggestions were migrated from the initial
`localStorage` plan to a shared Firestore backend, which promotes item 13 to active._

_Last updated: 2026‑08‑03._
