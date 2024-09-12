const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/test-pwa-240912/',
    '/test-pwa-240912/index.html',
    '/test-pwa-240912/style.css',
    '/test-pwa-240912/app.js',
    '/test-pwa-240912/manifest.json',
    '/test-pwa-240912/utils/date.js',
    '/test-pwa-240912/utils/math.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});