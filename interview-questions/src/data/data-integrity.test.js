// Data-integrity tests for the content pipeline.
//
// Runs on Node's built-in test runner (no extra dependencies — keeps the
// fragile split package.json / committed node_modules situation untouched):
//   npm test   ->   node --test src/data/data-integrity.test.js
//
// These guard the exact classes of bug we've hit while editing content:
// duplicate questions, id drift between questions/content.en/quizzes, malformed
// quiz slots, and English overrides pointing at questions that don't exist.

import { test } from 'node:test';
import assert from 'node:assert/strict';

import { categories } from './questions.js';
import { enContent } from './content.en.js';
import { quizzes, buildQuiz, hasQuiz } from './quizzes.js';

const ID_RE = /^[a-z0-9-]+$/;

// A quick lookup: categoryId -> Set of its question ids.
const questionIdsByCat = new Map(
  categories.map((c) => [c.id, new Set(c.questions.map((q) => q.id))])
);
const categoryIds = new Set(categories.map((c) => c.id));

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N} ]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

test('category ids are unique', () => {
  const ids = categories.map((c) => c.id);
  assert.equal(new Set(ids).size, ids.length, 'duplicate category id found');
});

test('every category has a well-formed shape', () => {
  for (const c of categories) {
    assert.ok(ID_RE.test(c.id), `bad category id: ${c.id}`);
    for (const field of ['title', 'icon', 'description']) {
      assert.equal(typeof c[field], 'string', `${c.id}.${field} must be a string`);
      assert.ok(c[field].trim().length > 0, `${c.id}.${field} must be non-empty`);
    }
    assert.ok(Array.isArray(c.questions) && c.questions.length > 0, `${c.id} has no questions`);
  }
});

test('question ids are unique within each category and well-formed', () => {
  for (const c of categories) {
    const seen = new Set();
    for (const q of c.questions) {
      assert.ok(ID_RE.test(q.id), `bad question id: ${c.id}/${q.id}`);
      assert.ok(!seen.has(q.id), `duplicate question id in ${c.id}: ${q.id}`);
      seen.add(q.id);
      assert.equal(typeof q.question, 'string', `${c.id}/${q.id} question must be a string`);
      assert.ok(q.question.trim().length > 0, `${c.id}/${q.id} question is empty`);
      assert.equal(typeof q.answer, 'string', `${c.id}/${q.id} answer must be a string`);
      assert.ok(q.answer.trim().length > 0, `${c.id}/${q.id} answer is empty`);
    }
  }
});

test('no two questions share the same text (no duplicates)', () => {
  const byText = new Map();
  for (const c of categories) {
    for (const q of c.questions) {
      const key = normalize(q.question);
      const where = `${c.id}/${q.id}`;
      assert.ok(
        !byText.has(key),
        `duplicate question text:\n  "${q.question}"\n  ${byText.get(key)} <-> ${where}`
      );
      byText.set(key, where);
    }
  }
});

test('English overrides reference only real categories and questions', () => {
  for (const [catId, override] of Object.entries(enContent)) {
    assert.ok(categoryIds.has(catId), `enContent has unknown category: ${catId}`);
    if (override.questions) {
      const validQ = questionIdsByCat.get(catId);
      for (const qId of Object.keys(override.questions)) {
        assert.ok(validQ.has(qId), `enContent[${catId}] overrides unknown question: ${qId}`);
        const tr = override.questions[qId];
        assert.equal(typeof tr.question, 'string', `en ${catId}/${qId} question must be a string`);
        assert.equal(typeof tr.answer, 'string', `en ${catId}/${qId} answer must be a string`);
      }
    }
  }
});

test('quiz banks reference real categories and are well-formed', () => {
  for (const [catId, bank] of Object.entries(quizzes)) {
    assert.ok(categoryIds.has(catId), `quizzes has unknown category: ${catId}`);
    assert.ok(hasQuiz(catId), `hasQuiz('${catId}') should be true`);
    assert.ok(Array.isArray(bank.questions) && bank.questions.length > 0, `${catId} quiz is empty`);
    const slotIds = new Set();
    for (const slot of bank.questions) {
      assert.ok(ID_RE.test(slot.id), `bad quiz slot id in ${catId}: ${slot.id}`);
      assert.ok(!slotIds.has(slot.id), `duplicate quiz slot id in ${catId}: ${slot.id}`);
      slotIds.add(slot.id);
      assert.ok(Array.isArray(slot.variants) && slot.variants.length > 0, `${catId}/${slot.id} has no variants`);
      for (const [i, v] of slot.variants.entries()) {
        const at = `${catId}/${slot.id}[${i}]`;
        assert.equal(typeof v.question, 'string', `${at} question must be a string`);
        assert.ok(v.question.trim().length > 0, `${at} question is empty`);
        assert.ok(Array.isArray(v.options) && v.options.length >= 2, `${at} needs >= 2 options`);
        assert.ok(v.options.every((o) => typeof o === 'string' && o.trim()), `${at} has an empty option`);
        assert.ok(
          Number.isInteger(v.correct) && v.correct >= 0 && v.correct < v.options.length,
          `${at} 'correct' index out of range`
        );
      }
    }
  }
});

test('buildQuiz produces a valid quiz with exactly one correct option per question', () => {
  for (const catId of Object.keys(quizzes)) {
    const quiz = buildQuiz(catId);
    assert.ok(quiz && Array.isArray(quiz.questions) && quiz.questions.length > 0, `${catId} buildQuiz empty`);
    for (const q of quiz.questions) {
      assert.equal(typeof q.question, 'string', `${catId} built question must be a string`);
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${catId} built question needs options`);
      const correct = q.options.filter((o) => o.isCorrect).length;
      assert.equal(correct, 1, `${catId}/${q.id} must have exactly one correct option, got ${correct}`);
      assert.ok(q.options.every((o) => typeof o.text === 'string' && o.text.trim()), `${catId} built option empty`);
    }
  }
});
