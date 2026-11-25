const fs = require('node:fs');
const path = require('node:path');
const { load } = require('../../dp700/tests/banks.cjs');

const banks = load();
const excluded = new Set(require('../commercial-exclusions.json').map(row => row.id));
const commercial = [
  ...banks.DP700_QUESTIONS.filter(q => !q.origin && q.scorable !== false && q.reviewStatus !== 'review'),
  ...banks.DP700_BASICS, ...banks.DP700_INTERMEDIATE,
  ...banks.DP700_ADVANCED, ...banks.DP700_BRIDGE
].filter(q => !excluded.has(q.id));
const ids = new Set(commercial.map(q => q.id));
const omitted = [
  ...banks.DP700_QUESTIONS.filter(q => q.origin || q.pdfPage || q.scorable === false || q.reviewStatus === 'review'),
  ...banks.DP700_PA_LIVE_20261106,
  ...banks.DP700_PA_20261114,
  ...banks.DP700_PA_PDF_20261112
].filter(q => !ids.has(q.id));

function normalize(value) {
  return value.normalize('NFKC').toLowerCase().replace(/[\s\p{P}\p{S}]/gu, '');
}
function content(q) {
  return normalize([q.question, q.caseText, q.code, ...(q.choices || q.orderItems || []), q.explanation]
    .filter(Boolean).join(' '));
}
function grams(value) {
  const result = new Set();
  for (let i = 0; i <= value.length - 3; i++) result.add(value.slice(i, i + 3));
  return result;
}
function dice(left, right) {
  let common = 0;
  for (const gram of left) if (right.has(gram)) common++;
  return 2 * common / (left.size + right.size) || 0;
}

const omittedGrams = omitted.map(q => ({
  id: q.id, grams: grams(content(q)),
  prompt: normalize([q.question, q.caseText].filter(Boolean).join(' ')),
  code: normalize(q.code || '')
}));
const closest = commercial.map(q => {
  const left = grams(content(q));
  const prompt = normalize([q.question, q.caseText].filter(Boolean).join(' '));
  const code = normalize(q.code || '');
  const ranked = omittedGrams.map(other => {
    const fullScore = dice(left, other.grams);
    const promptScore = Math.min(prompt.length, other.prompt.length) >= 30 ? dice(grams(prompt), grams(other.prompt)) : 0;
    const codeScore = Math.min(code.length, other.code.length) >= 80 ? dice(grams(code), grams(other.code)) : 0;
    return { id: other.id, score: Number(Math.max(fullScore, promptScore, codeScore).toFixed(4)) };
  }).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  return { id: q.id, omittedId: ranked[0].id, score: ranked[0].score };
}).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
const report = {
  method: 'Compare included items only with noncommercial source banks (PDF, Practice Assessment and held origin items). NFKC-normalized character trigrams; maximum Dice coefficient of full item, prompt (30+ characters) or code (80+ characters). Topic overlap is not proof of copying, and a low score is not proof of authorship.',
  commercialCount: commercial.length, omittedCount: omitted.length,
  highOverlapThreshold: 0.8, highOverlap: closest.filter(row => row.score >= 0.8),
  closest: closest.slice(0, 20)
};
const out = path.resolve(__dirname, '../audit/overlap-report.json');
fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n');
console.log(`Compared ${commercial.length} commercial candidates with ${omitted.length} omitted questions; ${report.highOverlap.length} high-overlap pairs`);
if (report.highOverlap.length) process.exitCode = 1;
