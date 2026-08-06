// Regenerate src/data/quiz/ccdvImported.js from the English master
// (ccdvImported.en.json) + the Russian translation map (ccdvImported.ru.json).
// A slot uses its Russian question/options when present in the map, otherwise
// falls back to English — so translation can proceed in batches without losing
// progress. The `correct` index always comes from the master.
import { readFileSync, writeFileSync } from 'node:fs';

const dir = new URL('../src/data/quiz/', import.meta.url);
const en = JSON.parse(readFileSync(new URL('ccdvImported.en.json', dir), 'utf8'));
const ru = JSON.parse(readFileSync(new URL('ccdvImported.ru.json', dir), 'utf8'));

let translated = 0;
const out = en.map((slot) => {
  const v = slot.variants[0];
  const t = ru[slot.id];
  if (t && t.question && Array.isArray(t.options) && t.options.length === v.options.length) {
    translated++;
    return { id: slot.id, variants: [{ question: t.question, options: t.options, correct: v.correct }] };
  }
  return slot;
});

const header =
  `// AUTO-GENERATED from ccdvImported.en.json + ccdvImported.ru.json (run scripts/apply-ccdv-ru.mjs).\n` +
  `// Imported practice quiz (single-answer) for the Claude Certified Developer (Foundations)\n` +
  `// mock exam. Adapted from a public study artifact by Anas Riad; unofficial, not affiliated\n` +
  `// with or endorsed by Anthropic. Edit translations in ccdvImported.ru.json, not here.\n` +
  `export const ccdvImportedQuiz = `;
writeFileSync(new URL('ccdvImported.js', dir), header + JSON.stringify(out, null, 2) + ';\n');
console.log(`applied: ${translated}/${en.length} slots translated to RU`);
