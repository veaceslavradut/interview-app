# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

The git root is only a wrapper: the whole app ("Java Interview Hub", a static React + Vite SPA deployed to GitHub Pages) is the self-contained npm project in `interview-questions/`. Run every `npm` command from there; the root has no `package.json` and must not get one (or a `node_modules/`).

```bash
cd interview-questions
npm ci
npm run dev                                   # dev server (regenerates content-manifest.js first)
npm run lint && npm test && npm run build     # full check suite, same as CI
node --test src/data/data-integrity.test.js   # run a single test file
```

Root-level files: `.github/workflows/ci.yml` (lint/test/build on PRs to `main`) and `deploy.yml` (Pages deploy on push to `main`). Both use `working-directory: interview-questions`.

Architecture, the content pipeline, and how to add questions or quizzes are documented in `interview-questions/CLAUDE.md`. Read it before editing anything under `src/data/`.
