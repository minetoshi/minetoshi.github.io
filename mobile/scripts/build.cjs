const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../../dp700');
const destination = path.resolve(__dirname, '../www');
const { load } = require('../../dp700/tests/banks.cjs');
const banks = load();
const excludedIds = new Set(require('../commercial-exclusions.json').map(row => row.id));
const commercial = {
  DP700_QUESTIONS: banks.DP700_QUESTIONS.filter(question => !question.origin && question.scorable !== false && question.reviewStatus !== 'review' && !excludedIds.has(question.id)),
  DP700_BASICS: banks.DP700_BASICS.filter(question => !excludedIds.has(question.id)),
  DP700_INTERMEDIATE: banks.DP700_INTERMEDIATE.filter(question => !excludedIds.has(question.id)),
  DP700_ADVANCED: banks.DP700_ADVANCED.filter(question => !excludedIds.has(question.id)),
  DP700_BRIDGE: banks.DP700_BRIDGE.filter(question => !excludedIds.has(question.id))
};
const count = Object.values(commercial).reduce((sum, bank) => sum + bank.length, 0);
if (count < 1 || new Set(Object.values(commercial).flat().map(q => q.id)).size !== count) throw new Error('Invalid commercial question set');
const allowedOrigins = { DP700_QUESTIONS: undefined, DP700_BASICS: 'basic15', DP700_INTERMEDIATE: 'mid15', DP700_ADVANCED: 'adv15', DP700_BRIDGE: 'bridge9' };
for (const [bank, questions] of Object.entries(commercial)) for (const question of questions) {
  if (question.origin !== allowedOrigins[bank] || question.pdfPage || question.scorable === false || question.reviewStatus === 'review' || !/^https:\/\/learn\.microsoft\.com\//.test(question.source || ''))
    throw new Error(`Commercial scope violation: ${question.id}`);
}
let html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const excludedModes = new Set(['pdf90', 'pdf1', 'pdf2', 'pdf3', 'pa50ja', 'paLive50', 'paNov14', 'paPdf50']);
html = html.replace(/<button\b[^>]*data-mode="([^"]+)"[^>]*>[^<]*<\/button>/g,
  (button, mode) => excludedModes.has(mode) ? '' : button);
html = html.replace(/<p><a[^>]*href="\.\/DP700_Visual_Guide_JA\.pdf"[^>]*>[^<]*<\/a><\/p>/, '');
html = html.replace(/<section class="card">\s*<h2>Microsoft公式Practice Assessment<\/h2>[\s\S]*?<\/section>/, '');
html = html.replace('全バンク全問（589問）', `全バンク全問（${count}問）`);
html = html.replace('PA予行25問', '難問25問');
html = html.replace('図解PDFの模擬問題90問収録、', '');
html = html.replace('図解PDF 全90問', '');
html = html.replace(/\s*<li>PA実戦50問（2026\/11\/6）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA論点50問（日本語）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA予行25問で85%以上<\/li>/, '');
html = html.replace('このサイトの問題は', 'このアプリの問題は');
html = html.replaceAll('DP-700 過去問道場', 'DP-700 問題道場');
html = html.replace('Microsoft Fabric初心者から合格圏へ。', 'Microsoft Fabricを初級から実践まで学ぶ。');
html = html.replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="独自演習${count}問を収録したオフライン学習アプリ。復習予定と進捗を端末内に保存。">`);
html = html.replace('<div class="grid">', `<div class="grid">\n<section class="card" id="dailyPlan"><h2>今日の学習</h2><p id="dailyProgress" class="small"></p><div class="bar"><i id="dailyProgressBar"></i></div><button class="btn primary" id="dailyStartBtn" style="width:100%;margin-top:14px">今日の10問を始める</button><p class="small">学習記録と復習予定はこの端末だけに保存します。</p></section>`);
html = html.replace('<button class="btn ghost" id="importHistoryBtn">学習履歴を読み込む</button>', '<button class="btn ghost" id="importHistoryBtn">学習履歴を読み込む</button><button class="btn ghost" id="restoreHistoryBtn" hidden>直前の履歴を復元</button>');
html = html.replace('</style>', '.orderItem.correct{border-color:#16a34a;background:#f0fdf4}.orderItem.wrong{border-color:#dc2626;background:#fef2f2}body::before{content:"";position:fixed;top:0;left:0;right:0;height:env(safe-area-inset-top);background:var(--bg);z-index:9997;pointer-events:none}.glossaryModal{padding-top:max(12px,env(safe-area-inset-top));padding-bottom:max(12px,env(safe-area-inset-bottom))}.glossaryPanel{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 24px)}@media(max-width:600px){.shell{padding-left:12px;padding-right:12px}.card{padding:14px}.modes{grid-template-columns:1fr 1fr}.btn{min-height:48px;padding:11px 8px}.question{font-size:19px}}\n</style>');
html = html.replace('DP-700 Dojo v6.5 • ', 'DP-700 問題道場 • <a href="./mobile-privacy.html">プライバシーポリシー</a> • ');
html = html.replace('プライバシーポリシー</a> • ', 'プライバシーポリシー</a> • <a href="./mobile-support.html">サポート</a> • ');
html = html.replace(/<script src="\.\/(?!glossary|app)[^\"]+"><\/script>\s*/g, '');
html = html.replace(/<script src="\.\/glossary\.js/, '<script src="./commercial-data.js"></script>\n<script src="./glossary.js');
// The public website keeps all banks. The iOS binary contains only the scoped exercises.
const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const assets = ['index.html', 'manifest.webmanifest', 'mobile-privacy.html', 'mobile-support.html', 'icons/icon-192.png', 'icons/icon-512.png', ...scripts];

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
  `\nwindow.DP700_META = { objectiveCount: 49, mobile: true, commercialCount: ${count} };\n`);
const appPath = path.join(destination, 'app.js');
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace('"図解模試 第1回へ"', '"難問25問へ"')
  .replace('session.mode==="adv15"?"bridge9":"pdf1"', 'session.mode==="adv15"?"bridge9":"pa25"')
  .replace('pa25:"PA予行25問"', 'pa25:"難問25問"');
fs.writeFileSync(appPath, app);
fs.writeFileSync(path.join(destination, 'index.html'), html);
console.log(`Copied ${new Set(assets).size} local assets to ${destination}`);
