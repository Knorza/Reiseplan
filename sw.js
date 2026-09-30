const CACHE = 'unterwegs-v1';
const ASSETS = ['./', './index.html', './style.css', './app.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil((async () => { for (const key of await caches.keys()) if (key.startsWith('unterwegs-') && key !== CACHE) await caches.delete(key); await self.clients.claim(); })()); });
self.addEventListener('fetch', event => { const request = event.request; if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return; event.respondWith((async () => { const cache = await caches.open(CACHE); const cached = await cache.match(request); if (cached) return cached; const response = await fetch(request); if (response.ok) await cache.put(request, response.clone()); return response; })()); });
