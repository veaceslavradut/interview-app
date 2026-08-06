// Optional question taxonomy (item 14): difficulty, tags, and related cross-links.
// All three are optional on a question — untagged/undated content stays valid and
// simply shows no badge and doesn't participate in filtering. Kept in one place so
// the data-integrity test, the manifest generator, and the UI agree on the values.

export const DIFFICULTIES = ['easy', 'medium', 'hard'];

// For sorting/among-badge ordering; also the canonical allowed set for the test.
export const DIFFICULTY_RANK = { easy: 0, medium: 1, hard: 2 };
