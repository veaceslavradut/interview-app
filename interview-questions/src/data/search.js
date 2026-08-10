// Shared question search — used by the home-page search and the global
// command-palette overlay. Data is static and in memory, so this is a simple
// (fast) linear scan; no index server needed.

// Flatten all categories' questions into a search index with pre-lowercased
// fields for quick matching.
export function buildSearchIndex(categories) {
  return categories.flatMap((c) =>
    c.questions.map((question) => ({
      catId: c.id,
      catTitle: c.title,
      catIcon: c.icon,
      id: question.id,
      question: question.question,
      questionLc: question.question.toLowerCase(),
      catTitleLc: c.title.toLowerCase(),
      answerLc: (question.answer || '').toLowerCase(),
    }))
  );
}

// Match on question title, category name, and answer text. Matches in the
// question title or the category name rank above matches found only in the
// answer body (so a term like "BigDecimal" still surfaces, but title hits win).
export function searchQuestions(index, rawQuery) {
  const q = (rawQuery || '').trim().toLowerCase();
  if (!q) return [];
  const primary = [];
  const secondary = [];
  for (const item of index) {
    if (item.questionLc.includes(q) || item.catTitleLc.includes(q)) primary.push(item);
    else if (item.answerLc.includes(q)) secondary.push(item);
  }
  return [...primary, ...secondary];
}

// Split text around the first case-insensitive occurrence of the query, for
// highlighting. Returns [{ text, hit }] parts; callers render `hit` as <mark>.
export function splitHighlight(text, rawQuery) {
  const q = (rawQuery || '').trim();
  if (!q) return [{ text, hit: false }];
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return [{ text, hit: false }];
  return [
    { text: text.slice(0, idx), hit: false },
    { text: text.slice(idx, idx + q.length), hit: true },
    { text: text.slice(idx + q.length), hit: false },
  ];
}
