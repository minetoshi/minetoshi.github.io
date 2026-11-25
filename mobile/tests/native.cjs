const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const app = path.join(root, 'ios/App/App');
const bank = JSON.parse(fs.readFileSync(path.join(app, 'Resources/questions.json'), 'utf8'));
const ids = bank.questions.map(q => q.id);
const excluded = require('../commercial-exclusions.json');
assert.equal(bank.version, 1);
assert.equal(bank.questions.length, 220);
assert.equal(new Set(ids).size, 220);
assert.deepEqual(Object.fromEntries(['core', 'basic', 'intermediate', 'advanced', 'bridge'].map(name => [name, bank.questions.filter(q => q.bank === name).length])),
  { core: 142, basic: 15, intermediate: 15, advanced: 30, bridge: 18 });
assert.equal(Object.keys(bank.objectiveLabels).length, 49);
assert(!ids.includes('C-SQL-09'));
assert(bank.questions.every(q => !/^O\d+-[CD]$/.test(q.id)));
assert.equal(excluded.length, 76);
assert(excluded.every(row => !ids.includes(row.id)));
assert(bank.questions.every(q => /^https:\/\/learn\.microsoft\.com\//.test(q.source)));
assert(bank.questions.every(q => !q.origin || ['basic15', 'mid15', 'adv15', 'bridge9'].includes(q.origin)));
assert(bank.questions.every(q => q.type === 'order' ? q.orderItems?.length >= 2 : q.choices?.length >= 2 && q.answers?.length >= 1));

const project = fs.readFileSync(path.join(root, 'ios/App/App.xcodeproj/project.pbxproj'), 'utf8');
const sources = fs.readdirSync(path.join(app, 'Sources')).map(name => fs.readFileSync(path.join(app, 'Sources', name), 'utf8')).join('\n');
assert(!/Capacitor|CAPBridgeViewController|WKWebView|WebKit/.test(project));
assert(!/import WebKit|WKWebView|CAPBridgeViewController|import Capacitor/.test(sources));
assert(!/\bpublic\/|\.html\b|\.js\b/.test(project));
assert(!fs.existsSync(path.join(app, 'Assets.xcassets/Splash.imageset')));
assert(fs.readFileSync(path.join(app, 'Base.lproj/LaunchScreen.storyboard'), 'utf8').includes('DP-700 問題道場'));
console.log('Native SwiftUI bundle passed: 220 questions, 49 themes, no WebView or web assets in the Xcode target');
