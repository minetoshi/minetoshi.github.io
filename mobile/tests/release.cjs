const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const appData = fs.readFileSync(path.resolve(__dirname, '../www/commercial-data.js'), 'utf8');
assert(!fs.readFileSync(path.resolve(__dirname, '../www/index.html'), 'utf8').includes('serviceWorker.register'));
const contextData = { window: {} };
vm.runInNewContext(appData, contextData);
const bank = Object.values(contextData.window).filter(Array.isArray).flat();
const byId = new Map(bank.map(q => [q.id, q]));
const base = 'http://127.0.0.1:8765/mobile/www/';

async function answer(page, wantCorrect) {
  const id = await page.locator('#qSkill').innerText();
  const q = byId.get(id);
  assert(q, `Missing question ${id}`);
  assert(await page.locator('#feedback').isHidden(), `Feedback leaked before answer: ${id}`);
  if (q.type === 'order') {
    const current = await page.locator('.orderItem span:first-child').allInnerTexts();
    if (wantCorrect) {
      for (let target = 0; target < q.orderItems.length; target++) {
        let at = current.findIndex((text, index) => index >= target && text.slice(text.indexOf('. ') + 2) === q.orderItems[target]);
        while (at > target) {
          await page.locator(`.orderItem:nth-child(${at + 1}) button[data-m="up"]`).click();
          [current[at], current[at - 1]] = [current[at - 1], current[at]];
          at--;
        }
      }
    } else if (current.every((text, index) => text.includes(q.orderItems[index]))) {
      await page.locator('.orderItem:nth-child(1) button[data-m="down"]').click();
    }
  } else {
    const choices = wantCorrect ? q.answers : [q.choices.findIndex((_, i) => !q.answers.includes(i)), ...q.answers.slice(1)];
    for (const i of choices) await page.locator(`#choices button.choice[data-i="${i}"]`).click();
  }
  await page.locator('#answerBtn').click();
  assert(await page.locator('#feedback').isVisible());
  assert((await page.locator('#feedback h3').innerText()) === (wantCorrect ? '正解' : '不正解'));
  if (q.type === 'order') assert(await page.locator('.orderItem.correct, .orderItem.wrong').count() === q.orderItems.length);
  else {
    assert(await page.locator('button.choice.correct').count() >= 1);
    if (!wantCorrect) assert(await page.locator('button.choice.wrong').count() >= 1);
  }
  return q;
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base);
    assert((await page.locator('h1').innerText()).includes('問題道場'));
    assert((await page.locator('#dailyProgress').innerText()).includes(`${bank.length}問`));
    assert((await page.locator('#bankInfo').innerText()).includes(`独自演習${bank.length}問`));
    assert((await page.locator('#dailyStartBtn').innerText()).includes('未着手から10問'));
    assert((await page.locator('#focusCounts').innerText()).includes(`未着手 ${bank.length}問`));
    const examDate = await page.evaluate(() => {
      const date = new Date(); date.setDate(date.getDate() + 9);
      return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
    });
    await page.locator('#examDate').fill(examDate);
    const dailyTarget = Math.ceil(bank.length / 10);
    assert((await page.locator('#planSummary').innerText()).includes(`1日${dailyTarget}問`));
    await page.reload();
    assert.equal(await page.locator('#examDate').inputValue(), examDate);
    assert((await page.locator('#dailyStartBtn').innerText()).includes(`未着手から${dailyTarget}問`));
    const tomorrow = await page.evaluate(() => {
      const date = new Date(); date.setDate(date.getDate() + 1);
      return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
    });
    await page.locator('#examDate').fill(tomorrow);
    assert((await page.locator('#planSummary').innerText()).includes('1回最大50問'));
    assert((await page.locator('#dailyStartBtn').innerText()).includes('未着手から50問'));
    await page.locator('#examDate').fill(examDate);
    assert.equal(await page.locator('#objectiveFocus [data-objective]').count(), 3);
    const objectiveId = await page.locator('#objectiveFocus [data-objective]').first().getAttribute('data-objective');
    await page.locator('#objectiveFocus [data-objective]').first().click();
    assert.equal(byId.get(await page.locator('#qSkill').innerText()).objectiveId, objectiveId);
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();
    const weakDomain = await page.locator('#domainSelect option').first().getAttribute('value');
    await page.locator('#weakStartBtn').click();
    assert.equal(await page.locator('#qDomain').innerText(), weakDomain);
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();
    await page.locator('#dailyStartBtn').click();
    assert.equal((await page.locator('#quizMode').innerText()).trim(), '今日の優先演習');
    assert.equal((await page.locator('#quizCounter').innerText()).trim(), `1 / ${dailyTarget}`);
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();

    for (const mode of ['basic15', 'mid15', 'adv15', 'bridge9', 'domain', 'mock45', 'code']) {
      if (mode === 'domain') await page.locator('#domainStart').click();
      else await page.locator(`[data-mode="${mode}"]`).click();
      assert(await page.locator('#qText').isVisible(), `Mode failed: ${mode}`);
      if (mode === 'mock45') await answer(page, false);
      if (mode === 'code') { assert(await page.locator('#codeBox').isVisible()); await answer(page, true); }
      page.once('dialog', dialog => dialog.accept());
      await page.locator('#quitBtn').click();
    }

    await page.locator('[data-mode="basic15"]').click();
    for (let i = 0; i < 15; i++) {
      await answer(page, i !== 0);
      await page.locator('#nextBtn').click();
    }
    assert(await page.locator('#resultPct').isVisible());
    assert((await page.locator('#resultBreakdown').innerText()).includes('分野別'));
    await page.locator('#retryWrongBtn').click();
    assert(await page.locator('#qText').isVisible());
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();
    assert((await page.locator('#dailyStartBtn').innerText()).includes('間違い'));

    await page.locator('[data-mode="allQuestions"]').click();
    const exercised = new Set();
    for (let i = 0; i < bank.length && exercised.size < 3; i++) {
      const q = await answer(page, true);
      if (['multi', 'code', 'order'].includes(q.type)) exercised.add(q.type);
      if (exercised.size < 3) await page.locator('#nextBtn').click();
    }
    assert.deepEqual([...exercised].sort(), ['code', 'multi', 'order']);
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();

    const original = await page.evaluate(() => localStorage.getItem('dp700-dojo-v2'));
    const imported = { items: { 'BASIC-1': { attempts: 7, correct: 5, streak: 1, lastWrong: false, nextReview: 0 } }, totalAttempts: 7, totalCorrect: 5, sessions: [] };
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#importHistoryFile').setInputFiles({ name: 'history.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(imported)) });
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('dp700-dojo-v2')).totalAttempts === 7);
    assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('dp700-dojo-v2')).totalAttempts), 7);
    assert.equal(await page.locator('#examDate').inputValue(), '');
    assert.equal(await page.evaluate(() => localStorage.getItem('dp700-dojo-v2-backup')), original);
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#restoreHistoryBtn').click();
    await page.waitForFunction(expected => localStorage.getItem('dp700-dojo-v2') === expected, original);
    assert.equal(await page.evaluate(() => localStorage.getItem('dp700-dojo-v2')), original);
    assert.equal(await page.locator('#examDate').inputValue(), examDate);

    await ctx.setOffline(true);
    await page.locator('#dailyStartBtn').click();
    assert(await page.locator('#qText').isVisible());
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();
    await ctx.setOffline(false);

    const reviewIds = bank.slice(0, 30).map(q => q.id);
    await page.evaluate(ids => {
      const data = JSON.parse(localStorage.getItem('dp700-dojo-v2'));
      for (const item of Object.values(data.items)) { item.lastWrong = false; item.nextReview = 0; }
      for (const id of ids) data.items[id] = { attempts: 1, correct: 0, streak: 0, lastWrong: true, nextReview: 1 };
      localStorage.setItem('dp700-dojo-v2', JSON.stringify(data));
    }, reviewIds);
    await page.reload();
    assert((await page.locator('#dailyStartBtn').innerText()).includes('25問 / 対象30問'));
    await page.locator('#dailyStartBtn').click();
    assert.equal((await page.locator('#quizCounter').innerText()).trim(), '1 / 25');
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#quitBtn').click();

    await page.evaluate(() => {
      const data = JSON.parse(localStorage.getItem('dp700-dojo-v2'));
      for (const item of Object.values(data.items)) item.nextReview = 0;
      localStorage.setItem('dp700-dojo-v2', JSON.stringify(data));
    });
    await page.reload();
    assert((await page.locator('#dailyStartBtn').innerText()).includes('25問 / 対象30問'));
    assert((await page.locator('#dailyStartBtn').innerText()).includes('間違い'));

    assert(await page.locator('#restoreHistoryBtn').isVisible());
    page.once('dialog', dialog => dialog.accept());
    await page.locator('#resetBtn').click();
    await page.waitForFunction(() => localStorage.getItem('dp700-dojo-v2') === null && localStorage.getItem('dp700-dojo-v2-backup') === null);
    assert(await page.locator('#restoreHistoryBtn').isHidden());
    assert.equal(await page.locator('#examDate').inputValue(), '');
    assert((await page.locator('#dailyProgress').innerText()).includes('経験済み 0/'));
    const remaining = bank.slice(-3).map(q => q.id);
    await page.evaluate(ids => {
      const data = JSON.parse(localStorage.getItem('dp700-dojo-v2') || '{"items":{},"sessions":[],"totalAttempts":0,"totalCorrect":0}');
      for (const id of ids) data.items[id] = { attempts: 1, correct: 1, streak: 1, lastWrong: false, nextReview: 0 };
      localStorage.setItem('dp700-dojo-v2', JSON.stringify(data));
    }, bank.slice(0, -3).map(q => q.id));
    await page.reload();
    assert((await page.locator('#dailyStartBtn').innerText()).includes('未着手から3問'));
    await page.locator('#dailyStartBtn').click();
    assert.equal((await page.locator('#quizCounter').innerText()).trim(), '1 / 3');
    assert(remaining.includes(await page.locator('#qSkill').innerText()));
    assert.deepEqual(errors, []);
    console.log(`iPhone viewport release flows passed: ${bank.length} bundled questions, modes, feedback, score, review batches, history restore/reset and offline`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
