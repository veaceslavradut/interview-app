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

### [x] 7. Quiz history & "review wrong answers"  ·  Effort: M  ·  Status: done
- **Why:** Quizzes are currently stateless — results vanish on reload.
- **Done:** `src/data/quizHistory.js` — plain localStorage module
  (`interview-hub-quiz-history`), keeps the last 10 attempts per category as
  `{ ts, correct, total, wrong: [slotId] }`. `QuizPage` records the attempt on finish
  and the results screen shows a **"Разобрать ошибки"** list linking each missed slot
  to the question with the same id (slot ids match question ids by convention;
  unmatched slots are silently skipped — read `isCorrect`, never a stored index).
  `CategoryPage` shows an **attempt history** panel (localized date, score, colored %).
  Strings via `t(lang, 'quizReviewWrongTitle' | 'quizPerfect' | 'quizHistoryTitle')`.
- **Verified:** Attempt persisted and shown on the category page; wrong-answer links
  navigate to the right questions; lint/test/build green; checked in `npm run preview`.

### [x] 8. Spaced‑repetition review mode  ·  Effort: M  ·  Status: done
- **Why:** The proven way to actually retain interview material; builds on item 5.
- **Done:** SM‑2‑lite scheduling added to `progress.jsx` (new `srs` bucket in the same
  `interview-hub-progress` store: `{ ease, interval, due }` per question; `rateQuestion`
  with again/hard/good/easy, `isDue` helper; `clearAll` clears it too). Questions marked
  **«↻ Повторить»** enter the queue — due when never rated or the schedule has come due.
  New `ReviewSessionPage` (`/review/session`): flashcards (question → «Show answer» with
  full markdown+highlighting → rate); «again» requeues the card within the session.
  The `/review` list gets a **«▶ Повторить сейчас (N)»** entry point with the due count.
  Strings via `t()` (RU + EN); no backend.
- **Verified:** Due queue builds from review marks; «again» requeues; ratings write
  ease/interval/due to localStorage and survive reload; done screen when queue is empty;
  lint/test/build green; checked in `npm run preview`.

---

## Phase 3 — Performance & reach

### [x] 9. Lazy‑load category data (code splitting)  ·  Effort: M  ·  Status: done
- **Why:** The whole app shipped as one ~1.82 MB JS chunk (gzip 561 kB) on every
  page, because all 316 answers were statically imported up front.
- **Done:** Split the content into a **light** layer and a **heavy** layer along the
  only seam that matters — just three consumers ever read an `answer` (QuestionPage,
  ReviewSessionPage, the search index); everything else needs no more than category
  meta + question text.
  - `scripts/gen-content-manifest.mjs` (wired into `predev`/`prebuild`) reads the RU/EN
    barrels in Node and emits the committed, answer‑free `src/data/content-manifest.js`
    (category meta + question text, RU + EN). The barrels are no longer imported by the
    app — only by the generator and the tests.
  - `localized.js` serves its synchronous API (`getCategories`/`getCategory`/`getQuestion`)
    from the manifest, and gains async loaders (`loadAnswer`, `loadCategoryFull`,
    `loadAllFull`) that pull answer markdown per category via `import.meta.glob` — so
    every category becomes its own lazy chunk.
  - `QuestionPage`/`ReviewSessionPage` load answers on demand; `SearchProvider` builds
    its (answer‑body) index lazily, warmed on idle and guaranteed on first open;
    `daily.js` reads the manifest so the home page never pulls the corpus. Route
    components are `React.lazy`‑loaded in `App.jsx` (only the landing page is eager),
    which also splits out react‑markdown/rehype‑highlight.
- **Verified:** Initial‑load JS **1.82 MB → 334 kB** (gzip **561 kB → 104 kB**, ~81% less);
  answers, the markdown/highlight libs, and the quiz banks now load per route. `index.html`
  preloads none of them. Smoke‑tested in `npm run preview`: home + QotD render from the
  manifest, a deep‑linked question lazy‑loads its answer, search matches on answer‑body
  text (`cgroups`), and the review flashcard reveals its answer. lint/test/build green
  (7/7 tests; 0 errors).

### [x] 10. PWA / offline  ·  Effort: M  ·  Status: done
- **Why:** Content is static and `SpeechPlayer` already handles offline voices — perfect
  for studying on a commute; also makes it installable.
- **Done:** `vite-plugin-pwa` (Workbox `generateSW`), declared the right way in
  `interview-questions/package.json` (devDependency, in the lockfile — not the root
  `node_modules` hack, per item 2's pattern). `registerType: 'autoUpdate'` so a new
  deploy's SW takes over silently and serves fresh assets on next load. Web manifest
  (name/short_name/description, `theme_color` `#4f6df5`, `standalone`, RU lang,
  `education`/`productivity` categories) + a **canvas-rendered coffee-cup icon set**
  (`pwa-192`, `pwa-512`, `maskable-512` with safe-zone padding, `apple-touch-icon` 180 —
  the old `java.png` was only 94×94). Fixed the previously-broken favicon path
  (`./public/java.png` → base-aware `/pwa-192x192.png`) and added `apple-touch-icon` +
  `theme-color` meta. Workbox precaches the **whole build** (shell + every lazy
  per-category answer chunk + quiz banks → full offline after first load) with an
  SPA `navigateFallback` to the shell. New bilingual **`InstallButton`** in the
  top-controls bar: listens for `beforeinstallprompt`, replays it on click, hides after
  install (iOS falls back to manual Add-to-Home-Screen, which the manifest +
  apple-touch-icon support). `devOptions.enabled:false` keeps the SW out of `npm run dev`.
- **Verified in `npm run preview`:** SW registers/activates and controls the page;
  92 precache entries incl. all icons + 83 JS chunks; manifest valid (3 icons);
  deep SPA route falls back to the cached shell (offline routing); install button renders
  with the RU label when the browser offers installation. Built with `GITHUB_PAGES=true`:
  manifest `start_url`/`scope` and all icon/`registerSW.js` links correctly prefixed with
  `/interview-app/`. lint/test/build green (7/7 tests, 0 errors).

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

### [x] 13. Suggestions: moderation & anti‑spam  ·  Effort: M  ·  Status: done
- **Why:** Suggestions ship on a **public Firestore write** with manual console‑only
  moderation (see `src/data/suggestions.js`). This is live in the app now, so the spam
  risk is real, not hypothetical.
- **Done:** Went with **(a) premoderation** as the real defense, since the API key ships
  in the bundle and a spammer can POST straight to the REST endpoint — so only
  **server‑side rules** can actually gate content, with client checks as defense‑in‑depth.
  - **`firestore.rules`** (new, in repo — the core): `read` public; `create` allowed
    **only** if the doc is well‑formed (field allow‑list, `question` 10–500 chars,
    `customTopic` ≤60, `categoryId` string|null) **and** carries `approved == false`;
    `update`/`delete` denied to clients. So nothing a stranger writes can appear until a
    moderator flips the flag in the console. *(Manual step: deploy once via
    `firebase deploy --only firestore:rules` or the console — nothing in the repo applies
    it automatically.)*
  - **App wiring:** writes set `approved:false`; the list filters to visible items and
    treats **legacy docs (no flag) as visible**, so the live list doesn't blank out during
    the transition. New submitters get a **"pending review" done‑screen** + moderation
    notes (RU/EN) instead of being sent to a list where their post is hidden.
  - **Client deterrents (secondary):** a **honeypot** field (bots that fill it are silently
    dropped with no write), a **min‑time‑on‑form** guard, a **30 s submit cooldown**
    (localStorage), and a **link‑count heuristic** — all pure helpers, unit‑tested.
- **Files:** `firestore.rules`, `src/data/suggestions.js` (+ `suggestions.test.js`),
  `SuggestPage.jsx`, `SuggestionsPage.jsx`, `translations.js`, `App.css`.
- **Verified:** 15/15 tests (8 new anti‑spam helper tests), lint 0 errors, build green.
  Smoke‑tested in `preview`: honeypot path reaches the done‑screen with **0 Firestore
  writes**; confirm step shows the moderation note; list page reads/filters without error.
  **Owner moderation stays console‑based** (flip `approved`); an in‑app admin (option c,
  Firebase Auth) was left out as heavier and not needed.

### [x] 14. Content depth: tags, difficulty, cross‑links  ·  Effort: L  ·  Status: done (mechanism; backfill incremental)
- **Why:** Enables filtering ("show only hard", "show Spring + concurrency"), related‑
  question navigation, and better study targeting.
- **Done:** Three **optional** per‑question fields — `difficulty` (`easy|medium|hard`),
  `tags: []`, `related: []` — added along the same light‑layer seam as `subtopic`, so
  filtering stays synchronous and answers stay lazy:
  - **`src/data/taxonomy.js`** holds the canonical `DIFFICULTIES` set (shared by the UI
    and the data‑integrity test); **`gen-content-manifest.mjs`** now carries the three
    fields into the manifest when present.
  - **CategoryPage** grows a **filter bar** — difficulty chips + tag chips (AND across
    selected tags), a reset, and a "no matches" state — that filters *before* the existing
    subtopic grouping and resets on category change; each list row shows a colored
    **difficulty badge**.
  - **QuestionPage** shows a difficulty badge + `#tag` badges under the title and a
    **"Related questions"** block; `resolveRelated` in `localized.js` maps refs (bare id =
    same category, `categoryId/questionId` = cross‑category) to links and silently drops
    stale ones.
  - **Data‑integrity test** extended: difficulty ∈ allowed set, tags are unique
    lowercase tokens, `related` refs resolve to a real question and aren't self‑refs.
  - **Backfill:** the flagship **`oop`** category (12 Qs) is fully tagged/rated/linked as a
    working demo; every other category stays valid untagged and simply shows no filter bar.
    Remaining categories can be backfilled incrementally.
- **Files:** `taxonomy.js`, `questions/oop.js`, `gen-content-manifest.mjs`, `localized.js`,
  `CategoryPage.jsx`, `QuestionPage.jsx`, `translations.js`, `App.css`, `data-integrity.test.js`.
- **Verified:** 8/8 tests, lint 0 errors, build green. Smoke‑tested in `preview`: difficulty +
  tag filtering (incl. AND → empty → reset), badges on list + question page, related links
  navigate (intra‑category).

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

1. **Item 12 — resolve the dependency hack** (removes the app's most fragile foundation).
2. **Item 11 — prerender to static HTML (SSG)** (pairs well with the PWA; real per‑question pages).
3. **Item 15 — remaining Notion content** (System Design / Algorithms write‑ups).

_Items 1–10, 13, and 14 are done. Item 9 split content into a light answer‑free manifest + lazy
per‑category answer chunks (first‑load JS ~561 → ~104 kB gzip); item 10 added a
`vite-plugin-pwa` service worker that precaches the whole build for offline use and makes the app
installable; item 13 added `firestore.rules` premoderation (`approved:false` on create,
enforced server‑side) plus honeypot/cooldown/heuristic deterrents — **the rules must be deployed
once** for premoderation to take effect; item 14 added optional `difficulty`/`tags`/`related` per
question with filter chips, badges, and a related‑questions block (mechanism complete; `oop`
backfilled, rest incremental)._

_Last updated: 2026‑08‑06._
