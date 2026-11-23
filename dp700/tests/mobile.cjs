const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '..');
const native = path.resolve(source, '../mobile/www');
const html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const nativeHtml = fs.readFileSync(path.join(native, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const nativeScripts = [...nativeHtml.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const serviceWorker = fs.readFileSync(path.join(source, 'sw.js'), 'utf8');
for (const asset of ['index.html', 'manifest.webmanifest', 'DP700_Visual_Guide_JA.pdf', ...scripts]) {
  assert(fs.existsSync(path.join(source, asset)), `Missing website asset ${asset}`);
  assert(serviceWorker.includes(`'./${asset}'`) || asset === 'index.html', `Missing offline asset ${asset}`);
}
for (const asset of ['index.html', 'manifest.webmanifest', 'mobile-privacy.html', ...nativeScripts])
  assert(fs.existsSync(path.join(native, asset)), `Missing app asset ${asset}`);
assert.equal(nativeScripts.join(','), 'commercial-data.js,glossary.js,app.js');
for (const excluded of ['pdf90', 'pdf1', 'pdf2', 'pdf3', 'pa50ja', 'paLive50', 'paNov14', 'paPdf50'])
  assert(!nativeHtml.includes(`data-mode="${excluded}"`), `Excluded mode ${excluded} in app`);
assert(!nativeHtml.includes('PA実戦50問'));
const nativeData = fs.readFileSync(path.join(native, 'commercial-data.js'), 'utf8');
const context = {window: {}};
require('node:vm').runInNewContext(nativeData, context);
const banks = ['DP700_QUESTIONS','DP700_BASICS','DP700_INTERMEDIATE','DP700_ADVANCED','DP700_BRIDGE'];
const questions = banks.flatMap(key => context.window[key]);
assert.equal(questions.length, 296);
assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
assert(questions.every(q => (!q.origin || ['basic15', 'mid15', 'adv15', 'bridge9'].includes(q.origin)) && !q.pdfPage));
assert(questions.every(q => q.scorable !== false && q.reviewStatus !== 'review'));
assert(!fs.existsSync(path.join(native, 'DP700_Visual_Guide_JA.pdf')));

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'],
    ...(process.env.DP700_CHROMIUM ? { executablePath: process.env.DP700_CHROMIUM } : {}) });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
    const page = await context.newPage();
    const url = 'http://127.0.0.1:8765/dp700/';
    await page.goto(url);
    await page.evaluate(() => navigator.serviceWorker.ready);
    const first = [];
    for (let attempt = 0; attempt < 2; attempt++) {
      await page.locator('[data-mode="paPdf50"]').click();
      first.push(await page.locator('#qSkill').innerText());
      page.once('dialog', dialog => dialog.accept());
      await page.locator('#quitBtn').click();
    }
    assert.notEqual(first[0], first[1]);
    await context.setOffline(true);
    await page.reload();
    await page.locator('[data-mode="basic15"]').click();
    assert(await page.locator('#qText').isVisible());
    const selected = page.locator('#choices button.choice').first();
    await selected.click();
    await page.locator('#answerBtn').click();
    assert(await page.locator('#feedback').isVisible());
    await page.locator('#nextBtn').click();
    assert(await page.locator('#qText').isVisible());
    console.log(`Mobile offline quiz passed; PDF first questions: ${first.join(', ')}`);
    await context.close();

    for (const width of [1280, 390]) {
      const appContext = await browser.newContext({ viewport: { width, height: 844 } });
      const app = await appContext.newPage();
      const errors = [];
      app.on('pageerror', e => errors.push(e.message));
      await app.goto('http://127.0.0.1:8765/mobile/www/');
      assert(await app.locator('[data-mode="allQuestions"]').innerText() === '全バンク全問（296問）');
      assert.equal(await app.locator('[data-mode="paPdf50"]').count(), 0);
      await app.locator('[data-mode="basic15"]').click();
      assert(await app.locator('#qText').isVisible());
      const id = await app.locator('#qSkill').innerText();
      const q = questions.find(item => item.id === id);
      assert(q, `Unknown commercial question: ${id}`);
      const wrong = q.choices.findIndex((_, i) => !q.answers.includes(i));
      assert(wrong >= 0);
      await app.locator(`button.choice[data-i="${wrong}"]`).click();
      await app.locator('#answerBtn').click();
      assert((await app.locator('#feedback').innerText()).includes('不正解'));
      assert(await app.locator('button.choice.wrong').count() === 1);
      assert(await app.locator('#feedback a').count() > 0);
      await app.locator('#nextBtn').click();
      assert(await app.locator('#qText').isVisible());
      assert.deepEqual(errors, []);
      await appContext.close();
    }
    console.log('Commercial app bundle passed on desktop and mobile viewports: 296 candidate questions');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
