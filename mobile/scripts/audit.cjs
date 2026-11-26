const fs = require('node:fs');
const path = require('node:path');
const { load } = require('../../dp700/tests/banks.cjs');
const { digest, verifyContent } = require('./content-integrity.cjs');

const banks = load();
const names = ['DP700_QUESTIONS', 'DP700_BASICS', 'DP700_INTERMEDIATE', 'DP700_ADVANCED', 'DP700_BRIDGE'];
const excluded = new Map(require('../commercial-exclusions.json').map(row => [row.id, row.reason]));
const prior = new Map(require('../../dp700/audit/question-ledger.json').items.map(row => [row.id, row]));
const sources = new Map(require('../../dp700/audit/source-checks.json').map(row => [row.url, row]));
const coreARevisions = new Set(['O02-A', 'O03-A', 'O04-A', 'O05-A', 'O06-A', 'O07-A', 'O08-A', 'O09-A', 'O10-A', 'O11-A', 'O12-A', 'O18-A', 'O19-A', 'O20-A', 'O22-A', 'O30-A', 'O40-A', 'O42-A', 'O50-A', 'O51-A', 'O52-A']);
const stagedRevisions = new Set(['ADV-23', 'ADV-25']);
const all = names.flatMap(bank => banks[bank]
  .filter(q => bank !== 'DP700_QUESTIONS' || (!q.origin && q.scorable !== false && q.reviewStatus !== 'review'))
  .map(q => ({ bank, q })));
verifyContent(all.map(({ q }) => q));
const errors = [], ids = new Set();
const rows = all.map(({ bank, q }) => {
  const issues = [];
  if (ids.has(q.id)) issues.push('duplicate id');
  ids.add(q.id);
  if (!q.question?.trim() || !q.explanation?.trim()) issues.push('missing question or explanation');
  if (!/^https:\/\/learn\.microsoft\.com\//.test(q.source || '')) issues.push('missing Learn URL');
  if (!sources.has(q.source) || sources.get(q.source).status !== 200) issues.push('source URL not checked successfully in prior audit');
  if (q.type === 'order') {
    if (!q.orderItems || q.orderItems.length < 2 || new Set(q.orderItems).size !== q.orderItems.length) issues.push('invalid order items');
  } else {
    if (!q.choices || q.choices.length < 2 || new Set(q.choices).size !== q.choices.length) issues.push('invalid choices');
    if (!q.answers?.length || q.answers.some(i => !Number.isInteger(i) || i < 0 || i >= q.choices.length)) issues.push('invalid answer index');
    if ((q.selectCount || q.answers.length) !== q.answers.length) issues.push('select count mismatch');
  }
  if (q.type === 'code' && !q.code) issues.push('missing code');
  if (q.type === 'case' && !q.caseText) issues.push('missing case');
  const allowedOrigin = { DP700_QUESTIONS: undefined, DP700_BASICS: 'basic15', DP700_INTERMEDIATE: 'mid15', DP700_ADVANCED: 'adv15', DP700_BRIDGE: 'bridge9' }[bank];
  if (q.origin !== allowedOrigin || q.pdfPage) issues.push('disallowed origin or PDF reference');
  if (!prior.has(q.id)) issues.push('missing prior content review');
  if (issues.length) errors.push(`${q.id}: ${issues.join(', ')}`);
  return {
    id: q.id, bank, contentSha256: digest(q), included: !excluded.has(q.id), exclusionReason: excluded.get(q.id) || null,
    question: q.question, caseText: q.caseText || null, code: q.code || null,
    type: q.type, choices: q.choices || q.orderItems, selectCount: q.type === 'order' ? q.orderItems.length : q.selectCount || q.answers.length,
    answerIndices: q.answers || null,
    correctChoices: q.type === 'order' ? q.orderItems : q.answers.map(i => q.choices[i]),
    explanation: q.explanation, source: q.source,
    contentReview: !prior.has(q.id) ? 'missing' : stagedRevisions.has(q.id)
      ? '2026-11-27 independent staged-question review; see staged-review-20261127.md; content hash locked'
      : coreARevisions.has(q.id)
      ? '2026-11-27 independent core A distractor review; see core-a-review-20261127.md; content hash locked'
      : q.qualityRevision === '2026-11-27'
      ? '2026-11-27 independent core question and distractor review; see core-b-review-20261127.md; content hash locked'
      : q.qualityRevision === '2026-11-26'
        ? '2026-11-26 independent code semantics and distractor review; see code-order-review-20261126.md; content hash locked'
        : '2026-11-16 prior question-level review; current structural recheck; content hash locked',
    specEvidence: q.answerEvidence === 'spec-verified' ? 'previously marked spec-verified' : 'independent expected answer; Learn URL is a reference, not an official individual answer',
    officialIndividualAnswer: false,
    rightsReview: 'No PDF or Practice Assessment origin metadata and no embedded third-party image; exact content is locked for future review',
    rightsLimit: 'Repository history and text similarity do not establish independent authorship. Publisher must confirm prompt, choice, explanation and code provenance before sale.',
    structuralIssues: issues
  };
});
for (const [id] of excluded) if (!ids.has(id)) errors.push(`Unknown excluded ID: ${id}`);
if (rows.length !== 296) errors.push(`Expected baseline 296, found ${rows.length}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const report = {
  baseline: 'origin/main b908fd3', date: '2026-11-26',
  scope: 'Original commercial candidate set only. HTTP success does not establish semantic correctness or copyright permission.',
  integrityLock: 'mobile/audit/content-lock.json',
  overlapReport: 'mobile/audit/overlap-report.json',
  candidateCount: rows.length, includedCount: rows.filter(row => row.included).length,
  excludedCount: excluded.size, officialIndividualAnswerCount: 0,
  rows
};
const out = path.resolve(__dirname, '../audit/commercial-questions.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n');
console.log(`Audited ${rows.length} candidate records; ${report.includedCount} included, ${excluded.size} excluded`);
