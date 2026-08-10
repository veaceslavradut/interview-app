// Unit tests for the suggestion anti-spam helpers. Pure functions only — no
// network, so this never touches the live Firestore. Run via `npm test`
// (node:test, zero deps, same as data-integrity.test.js).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  SUGGEST_LIMITS,
  countLinks,
  validateSuggestion,
  canSubmitNow,
  isVisibleSuggestion,
} from './suggestions.js';

const longEnough = 'x'.repeat(SUGGEST_LIMITS.minQuestion);

test('validateSuggestion accepts a well-formed question', () => {
  assert.equal(validateSuggestion({ question: 'What is a Java record?', customTopic: '' }), null);
});

test('validateSuggestion rejects too-short questions', () => {
  assert.equal(validateSuggestion({ question: 'short', customTopic: '' }), 'suggestErrorTooShort');
  // whitespace does not count toward the minimum
  assert.equal(
    validateSuggestion({ question: '   ' + 'ab' + '   ', customTopic: '' }),
    'suggestErrorTooShort'
  );
});

test('validateSuggestion rejects over-long questions', () => {
  const tooLong = 'a'.repeat(SUGGEST_LIMITS.maxQuestion + 1);
  assert.equal(validateSuggestion({ question: tooLong, customTopic: '' }), 'suggestErrorTooLong');
});

test('validateSuggestion rejects link spam over the limit', () => {
  const spam = longEnough + ' http://a.com http://b.com http://c.com';
  assert.equal(validateSuggestion({ question: spam, customTopic: '' }), 'suggestErrorTooManyLinks');
  // at or under the limit is allowed
  const ok = longEnough + ' see http://a.com and www.b.com';
  assert.equal(validateSuggestion({ question: ok, customTopic: '' }), null);
});

test('validateSuggestion rejects over-long custom topics', () => {
  const topic = 't'.repeat(SUGGEST_LIMITS.maxTopic + 1);
  assert.equal(
    validateSuggestion({ question: longEnough, customTopic: topic }),
    'suggestErrorTopicTooLong'
  );
});

test('countLinks counts http(s) and www forms', () => {
  assert.equal(countLinks('no links here'), 0);
  assert.equal(countLinks('http://a.com HTTPS://B.com www.c.com'), 3);
});

test('canSubmitNow enforces the cooldown window', () => {
  const now = 1_000_000;
  assert.equal(canSubmitNow(now, 0), true); // never submitted
  assert.equal(canSubmitNow(now, null), true);
  assert.equal(canSubmitNow(now, now - SUGGEST_LIMITS.cooldownMs), true); // exactly elapsed
  assert.equal(canSubmitNow(now, now - 1), false); // just submitted
});

test('isVisibleSuggestion hides only explicitly rejected items', () => {
  assert.equal(isVisibleSuggestion({ approved: true }), true);
  assert.equal(isVisibleSuggestion({ approved: null }), true); // legacy, pre-moderation
  assert.equal(isVisibleSuggestion({ approved: false }), false);
});
