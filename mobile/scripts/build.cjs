const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../../dp700');
const destination = path.resolve(__dirname, '../www');
const html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
const assets = ['index.html', 'manifest.webmanifest', 'sw.js', 'DP700_Visual_Guide_JA.pdf', 'icons/icon-192.png', 'icons/icon-512.png', ...scripts];

fs.rmSync(destination, { recursive: true, force: true });
for (const asset of new Set(assets)) {
  const input = path.join(source, asset);
  if (!fs.existsSync(input)) throw new Error(`Missing app asset: ${asset}`);
  const output = path.join(destination, asset);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.copyFileSync(input, output);
}
console.log(`Copied ${new Set(assets).size} local assets to ${destination}`);
