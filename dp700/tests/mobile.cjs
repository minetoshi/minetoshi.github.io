const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '..');
const native = path.resolve(source, '../mobile/www');
const html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const serviceWorker = fs.readFileSync(path.join(source, 'sw.js'), 'utf8');
for (const asset of ['index.html', 'manifest.webmanifest', 'DP700_Visual_Guide_JA.pdf', ...scripts]) {
  assert(fs.existsSync(path.join(native, asset)), `Missing native asset ${asset}`);
  assert(serviceWorker.includes(`'./${asset}'`) || asset === 'index.html', `Missing offline asset ${asset}`);
}

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
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
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
