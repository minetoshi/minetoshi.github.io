const CACHE = 'dp700-offline-20261123';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png',
  './questions.js', './pdf-questions.js', './beginner.js',
  './intermediate.js', './advanced.js', './bridge.js', './glossary.js',
  './pa-coach-a.js', './pa-coach-b.js', './pa-coach-c.js', './pa-coach-d.js',
  './pa-explain.js', './pa-20261114-a.js', './pa-20261114-b.js',
  './pa-pdf-20261112-a.js', './pa-pdf-20261112-b.js',
  './quality-fixes.js', './app.js', './DP700_Visual_Guide_JA.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('dp700-offline-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const url = new URL(event.request.url);
    const cached = await cache.match(url.pathname);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) cache.put(key, response.clone());
      return response;
    } catch (error) {
      if (event.request.mode === 'navigate') return cache.match('./index.html');
      throw error;
    }
  })());
});
