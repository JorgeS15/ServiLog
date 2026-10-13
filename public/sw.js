const CACHE = 'servilog-__VERSION__';
const ASSETS = ['/', '/index.html', '/app.js', '/style.css', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // API requests: never cached — let the browser handle them so a network
  // failure surfaces as a real fetch error (the app's offline write queue
  // relies on that; a synthetic 200 response used to hide it).
  if (url.pathname.startsWith('/api/')) return;
  // Static: cache first
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
