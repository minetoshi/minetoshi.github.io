const assert = require('node:assert/strict');
const { load } = require('../../dp700/tests/banks.cjs');
const { verifyContent } = require('../scripts/content-integrity.cjs');

const banks = load();
const candidates = [
  ...banks.DP700_QUESTIONS.filter(q => !q.origin && q.scorable !== false && q.reviewStatus !== 'review'),
  ...banks.DP700_BASICS, ...banks.DP700_INTERMEDIATE,
  ...banks.DP700_ADVANCED, ...banks.DP700_BRIDGE
];
assert.doesNotThrow(() => verifyContent(candidates));
const changed = candidates.map(q => ({ ...q }));
changed[0].explanation += 'changed';
assert.throws(() => verifyContent(changed), /changed since content lock/);
assert.throws(() => verifyContent(candidates.slice(1)), /missing question/);
assert.throws(() => verifyContent([...candidates, { id: 'unreviewed' }]), /Unreviewed/);
console.log('Commercial content lock detects edits, missing items and unreviewed additions');
