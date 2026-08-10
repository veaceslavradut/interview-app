// Meta-only prerender (item 11). Runs as `postbuild`, after `vite build`.
//
// The app is a client-rendered SPA, so every route ships the same index.html with
// a single generic <title> and no per-page meta — bad for search indexing and, more
// importantly, for link previews (Slack/Twitter/Facebook read OG tags from the
// initial HTML and never run JS). This script writes a static index.html per route
// with a route-specific <title> + description + Open Graph / Twitter / canonical
// tags, so a fresh fetch of any URL returns correct meta. The React body still
// hydrates client-side exactly as before (answers stay lazy — item 9 untouched).
//
// GitHub Pages serves dist/<path>/index.html at /<base><path>/, and the deploy's
// 404.html SPA fallback still covers anything not prerendered.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { categoriesMeta } from '../src/data/content-manifest.js';
import {
  homeTitle,
  homeDescription,
  categoryTitle,
  categoryDescription,
  questionTitle,
  questionDescription,
} from '../src/data/pageMeta.js';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE_ORIGIN = 'https://veaceslavradut.github.io';
const BASE = globalThis.process?.env.GITHUB_PAGES ? '/interview-app/' : '/';
const SITE_NAME = 'Java Interview Hub';
const OG_IMAGE = `${SITE_ORIGIN}${BASE}pwa-512x512.png`;

const template = readFileSync(join(distDir, 'index.html'), 'utf8');
if (!/<title>[\s\S]*?<\/title>/.test(template)) {
  throw new Error('prerender: no <title> found in dist/index.html — did vite build run?');
}

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Build a page from the template by swapping its <title> for a full meta block.
// `route` is the path after the base, without a leading slash ('' = home).
function render({ title, description, route }) {
  const url = `${SITE_ORIGIN}${BASE}${route}`;
  const t = esc(title);
  const d = esc(description);
  const head = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ');
  return template.replace(/<title>[\s\S]*?<\/title>/, head);
}

// Write dist/<route>/index.html (route '' overwrites dist/index.html itself).
function writePage(route, html) {
  const outDir = route ? join(distDir, route) : distDir;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
}

let count = 0;
const emit = (route, meta) => {
  writePage(route, render({ ...meta, route }));
  count++;
};

// Home
emit('', { title: homeTitle('ru'), description: homeDescription('ru') });

// Interactive pages — no rich content, but a correct title on first load.
const staticPages = {
  suggest: 'Предложить вопрос',
  suggestions: 'Предложенные вопросы',
  bookmarks: 'Закладки',
  review: 'На повторение',
  random: 'Случайный вопрос',
};
for (const [route, name] of Object.entries(staticPages)) {
  emit(route, { title: `${name} · ${SITE_NAME}`, description: homeDescription('ru') });
}

// Categories + their questions
for (const cat of categoriesMeta) {
  emit(`category/${cat.id}`, {
    title: categoryTitle(cat),
    description: categoryDescription(cat, cat.questions.length, 'ru'),
  });
  for (const q of cat.questions) {
    emit(`category/${cat.id}/question/${q.id}`, {
      title: questionTitle(q, cat),
      description: questionDescription(q, cat, 'ru'),
    });
  }
}

console.log(`prerender: wrote ${count} HTML pages (base ${BASE})`);
