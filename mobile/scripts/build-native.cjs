const fs = require('node:fs');
const path = require('node:path');
const { load } = require('../../dp700/tests/banks.cjs');

const banks = load();
const excluded = new Set(require('../commercial-exclusions.json').map(row => row.id));
const labels = require('../objective-labels.json');
const selected = [
  ...banks.DP700_QUESTIONS.filter(q => !q.origin && q.scorable !== false && q.reviewStatus !== 'review' && !excluded.has(q.id)).map(q => ({ ...q, bank: 'core' })),
  ...banks.DP700_BASICS.filter(q => !excluded.has(q.id)).map(q => ({ ...q, bank: 'basic' })),
  ...banks.DP700_INTERMEDIATE.filter(q => !excluded.has(q.id)).map(q => ({ ...q, bank: 'intermediate' })),
  ...banks.DP700_ADVANCED.filter(q => !excluded.has(q.id)).map(q => ({ ...q, bank: 'advanced' })),
  ...banks.DP700_BRIDGE.filter(q => !excluded.has(q.id)).map(q => ({ ...q, bank: 'bridge' }))
];
if (selected.length !== 295 || new Set(selected.map(q => q.id)).size !== 295) throw new Error('Unexpected native question count or duplicate ID');
for (const q of selected) {
  if (!/^https:\/\/learn\.microsoft\.com\//.test(q.source || '') || !q.explanation || !q.question ||
      !['single', 'multi', 'case', 'code', 'order'].includes(q.type) || q.pdfPage ||
      (q.type === 'order' ? !Array.isArray(q.orderItems) || q.orderItems.length < 2 :
        !Array.isArray(q.choices) || !Array.isArray(q.answers) || q.answers.length < 1 || q.answers.some(i => i < 0 || i >= q.choices.length))) {
    throw new Error(`Invalid native question: ${q.id}`);
  }
}
const output = path.resolve(__dirname, '../ios/App/App/Resources/questions.json');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify({ version: 1, questions: selected, objectiveLabels: labels }));
console.log(`Wrote ${selected.length} native questions to ${output}`);
