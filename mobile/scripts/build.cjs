const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../../dp700');
const destination = path.resolve(__dirname, '../www');
const { load } = require('../../dp700/tests/banks.cjs');
const banks = load();
const commercial = {
  DP700_QUESTIONS: banks.DP700_QUESTIONS.filter(question => !question.origin && question.scorable !== false && question.reviewStatus !== 'review'),
  DP700_BASICS: banks.DP700_BASICS,
  DP700_INTERMEDIATE: banks.DP700_INTERMEDIATE,
  DP700_ADVANCED: banks.DP700_ADVANCED,
  DP700_BRIDGE: banks.DP700_BRIDGE
};
const count = Object.values(commercial).reduce((sum, bank) => sum + bank.length, 0);
if (count !== 296) throw new Error(`Unexpected commercial question count: ${count}`);
let html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const excludedModes = new Set(['pdf90', 'pdf1', 'pdf2', 'pdf3', 'pa50ja', 'paLive50', 'paNov14', 'paPdf50']);
html = html.replace(/<button\b[^>]*data-mode="([^"]+)"[^>]*>[^<]*<\/button>/g,
  (button, mode) => excludedModes.has(mode) ? '' : button);
html = html.replace(/<p><a[^>]*href="\.\/DP700_Visual_Guide_JA\.pdf"[^>]*>[^<]*<\/a><\/p>/, '');
html = html.replace(/<section class="card">\s*<h2>Microsoft公式Practice Assessment<\/h2>[\s\S]*?<\/section>/, '');
html = html.replace('全バンク全問（589問）', '全バンク全問（296問）');
html = html.replace('PA予行25問', '難問25問');
html = html.replace('図解PDFの模擬問題90問収録、', '');
html = html.replace('図解PDF 全90問', '');
html = html.replace(/\s*<li>PA実戦50問（2026\/11\/6）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA論点50問（日本語）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA予行25問で85%以上<\/li>/, '');
html = html.replace('このサイトの問題は', 'このアプリの問題は');
html = html.replace('DP-700 Dojo v6.5 • ', 'DP-700 問題道場 • <a href="./mobile-privacy.html">プライバシーポリシー</a> • ');
html = html.replace(/<script src="\.\/(?!glossary|app)[^\"]+"><\/script>\s*/g, '');
html = html.replace(/<script src="\.\/glossary\.js/, '<script src="./commercial-data.js"></script>\n<script src="./glossary.js');
// The private website keeps all banks. The iOS binary contains only the core and staged original exercises.
const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const assets = ['index.html', 'manifest.webmanifest', 'mobile-privacy.html', 'icons/icon-192.png', 'icons/icon-512.png', ...scripts];

fs.rmSync(destination, { recursive: true, force: true });
for (const asset of new Set(assets)) {
  if (asset === 'commercial-data.js') continue;
  const input = path.join(source, asset);
  if (!fs.existsSync(input)) throw new Error(`Missing app asset: ${asset}`);
  const output = path.join(destination, asset);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.copyFileSync(input, output);
}
fs.writeFileSync(path.join(destination, 'commercial-data.js'),
  Object.entries(commercial).map(([name, questions]) => `window.${name} = ${JSON.stringify(questions)};`).join('\n') +
  '\nwindow.DP700_META = { objectiveCount: 49 };\n');
const appPath = path.join(destination, 'app.js');
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace('"図解模試 第1回へ"', '"難問25問へ"')
  .replace('session.mode==="adv15"?"bridge9":"pdf1"', 'session.mode==="adv15"?"bridge9":"pa25"')
  .replace('pa25:"PA予行25問"', 'pa25:"難問25問"');
fs.writeFileSync(appPath, app);
fs.writeFileSync(path.join(destination, 'index.html'), html);
console.log(`Copied ${new Set(assets).size} local assets to ${destination}`);
