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
const objectiveLabels = require('../objective-labels.json');
const objectiveIds = new Set(commercial.DP700_QUESTIONS.map(q => q.objectiveId).filter(id => /^O\d+$/.test(id||'')));
if (objectiveIds.size !== 49 || Object.keys(objectiveLabels).length !== objectiveIds.size || [...objectiveIds].some(id => !objectiveLabels[id])) throw new Error('Missing Japanese objective label');
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
html = html.replace('全バンク全問（589問）', `全問を解く（${count}問）`);
html = html.replace('初級ステップ（15問）', '初級・15問').replace('中級ステップ（15問）', '中級・15問')
  .replace('上級ステップ（30問）', '上級・30問').replace('最上級ステップ（模試への橋渡し・18問）', '最上級・18問');
html = html.replace('data-mode="quick10">10問</button>', 'data-mode="quick10">10問クイック</button>')
  .replace('data-mode="train20">20問</button>', 'data-mode="train20">20問演習</button>');
html = html.replace('<h2>すぐ始める</h2>', '<h2>演習を選ぶ</h2>')
  .replace('<button class="btn primary" data-mode="basic15">', '<div class="modeGroup">段階的に学ぶ</div><button class="btn primary" data-mode="basic15">')
  .replace('<button class="btn primary" data-mode="quick10">', '<div class="modeGroup">短時間で解く</div><button class="btn primary" data-mode="quick10">')
  .replace('<button class="btn secondary" data-mode="mock45">', '<div class="modeGroup">模試・応用</div><button class="btn secondary" data-mode="mock45">')
  .replace('<button class="btn ghost" data-mode="wrong">', '<div class="modeGroup">復習・履歴</div><button class="btn ghost" data-mode="wrong">');
html = html.replace('<h2>合格目安</h2>', '<h2>学習目標の例</h2>');
html = html.replace('PA予行25問', '難問25問');
html = html.replace('図解PDFの模擬問題90問収録、', '');
html = html.replace('図解PDF 全90問', '');
html = html.replace(/\s*<li>PA実戦50問（2026\/11\/6）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA論点50問（日本語）で85%以上<\/li>/, '');
html = html.replace(/\s*<li>PA予行25問で85%以上<\/li>/, '');
html = html.replace('このサイトの問題は', 'このアプリの問題は');
html = html.replaceAll('DP-700 過去問道場', 'DP-700 問題道場');
html = html.replace('Microsoft Fabric初心者から合格圏へ。', '試験日から逆算して毎日の学習を進める。');
html = html.replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="独自演習${count}問を収録したオフライン学習アプリ。復習予定と進捗を端末内に保存。">`);
html = html.replace('<div class="grid">', `<div class="grid">\n<section class="card" id="dailyPlan"><h2>今日の学習</h2><label for="examDate" class="coachLabel">試験日（任意）</label><input id="examDate" type="date" aria-describedby="planSummary"><p id="planSummary" class="small" aria-live="polite"></p><p id="dailyProgress" class="small"></p><div class="bar"><i id="dailyProgressBar"></i></div><p id="focusCounts" class="small"></p><button class="btn primary coachAction" id="dailyStartBtn">今日の優先10問を始める</button><div class="coachNext"><b>次に鍛える分野</b><p id="weakSummary" class="small"></p><button class="btn secondary coachAction" id="weakStartBtn">この分野を20問</button></div><p class="small">学習記録と試験日はこの端末だけに保存します。</p></section>\n<section class="card" id="objectivePlan"><h2>次に学ぶテーマ</h2><p class="small">未着手と正答率80%未満のテーマを優先して表示します。</p><div id="objectiveFocus"></div></section>`);
html = html.replace('<button class="btn ghost" id="importHistoryBtn">学習履歴を読み込む</button>', '<button class="btn ghost" id="importHistoryBtn">学習履歴を読み込む</button><button class="btn ghost" id="restoreHistoryBtn" hidden>直前の履歴を復元</button>');
html = html.replace('</style>', '.orderItem.correct{border-color:#16a34a;background:#f0fdf4}.orderItem.wrong{border-color:#dc2626;background:#fef2f2}body::before{content:"";position:fixed;top:0;left:0;right:0;height:env(safe-area-inset-top);background:var(--bg);z-index:9997;pointer-events:none}.glossaryModal{padding-top:max(12px,env(safe-area-inset-top));padding-bottom:max(12px,env(safe-area-inset-bottom))}.glossaryPanel{max-height:calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 24px)}.coachLabel{display:block;font-weight:700;margin:12px 0 6px}#examDate{width:100%;min-height:48px;padding:10px;border:1px solid var(--line);border-radius:12px;background:#fff;color:var(--ink)}.coachAction{width:100%;margin-top:10px}.coachNext{border-top:1px solid var(--line);margin-top:16px;padding-top:14px}.coachNext p{margin:6px 0}.objectiveRow{display:grid;grid-template-columns:minmax(0,1fr) 70px;align-items:center;gap:8px;border-top:1px solid var(--line);padding:10px 0}.objectiveRow b,.objectiveRow .small{display:block}.objectiveRow .btn{min-height:44px}.modeGroup{grid-column:1/-1;font-size:13px;font-weight:800;color:var(--muted);margin-top:8px}@media(max-width:600px){.shell{padding-left:12px;padding-right:12px}.card{padding:14px}.modes{grid-template-columns:1fr 1fr}.btn{min-height:48px;padding:11px 8px}.question{font-size:19px}}\n</style>');
html = html.replace('</style>', '#examDate{display:block;box-sizing:border-box;min-width:0;width:calc(100% - 18px);max-width:calc(100% - 18px)}\n</style>');
html = html.replace('DP-700 Dojo v6.5 • ', 'DP-700 問題道場 • <a href="./mobile-privacy.html">プライバシーポリシー</a> • ');
html = html.replace('プライバシーポリシー</a> • ', 'プライバシーポリシー</a> • <a href="./mobile-support.html">サポート</a> • ');
html = html.replace(/<script src="\.\/(?!glossary|app)[^\"]+"><\/script>\s*/g, '');
html = html.replace(/<script src="\.\/glossary\.js/, '<script src="./commercial-data.js"></script>\n<script src="./glossary.js');
// The native bundle already includes every asset; a Web service worker would request an absent sw.js.
html = html.replace(/<script>\s*if \('serviceWorker' in navigator[\s\S]*?<\/script>/, '');
if (html.includes('serviceWorker.register')) throw new Error('Unexpected service worker registration in native HTML');
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
  `\nwindow.DP700_META = { objectiveCount: 49, mobile: true, commercialCount: ${count} };\nwindow.DP700_OBJECTIVE_LABELS = ${JSON.stringify(objectiveLabels)};\n`);
const appPath = path.join(destination, 'app.js');
let app = fs.readFileSync(appPath, 'utf8');
app = app.replace('"図解模試 第1回へ"', '"難問25問へ"')
  .replace('session.mode==="adv15"?"bridge9":"pdf1"', 'session.mode==="adv15"?"bridge9":"pa25"')
  .replace('pa25:"PA予行25問"', 'pa25:"難問25問"');
fs.writeFileSync(appPath, app);
fs.writeFileSync(path.join(destination, 'index.html'), html);
console.log(`Copied ${new Set(assets).size} local assets to ${destination}`);
