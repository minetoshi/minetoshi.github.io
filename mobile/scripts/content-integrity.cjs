const crypto = require('node:crypto');
const lock = require('../audit/content-lock.json');

function digest(question) {
  return crypto.createHash('sha256').update(JSON.stringify(question)).digest('hex');
}

function verifyContent(questions) {
  const expected = new Map(lock.items.map(item => [item.id, item.sha256]));
  if (expected.size !== lock.items.length) throw new Error('Duplicate ID in commercial content lock');
  const seen = new Set();
  for (const question of questions) {
    if (seen.has(question.id)) throw new Error(`Duplicate commercial question ID: ${question.id}`);
    seen.add(question.id);
    if (!expected.has(question.id)) throw new Error(`Unreviewed commercial question ID: ${question.id}`);
    if (expected.get(question.id) !== digest(question)) {
      throw new Error(`Commercial question changed since content lock: ${question.id}. Review its content and provenance before updating the lock.`);
    }
  }
  for (const id of expected.keys()) {
    if (!seen.has(id)) throw new Error(`Commercial content lock contains missing question: ${id}`);
  }
}

module.exports = { digest, verifyContent };
