const cache_name = 'pwss-static-v1';
const files_to_cache = ['./', './index.html'];

self.addEventListener('install', (event) => {
  // Cache the app shell for quick startup and limited offline support.
  event.waitUntil(caches.open(cache_name).then((cache) => cache.addAll(files_to_cache)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cache_keys) =>
      Promise.all(
        cache_keys
          .filter((existing_cache_name) => existing_cache_name !== cache_name)
          .map((old_cache_name) => caches.delete(old_cache_name))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  // Network-first for API requests so scheduling data stays fresh.
  if (event.request.url.includes('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Cache-first for static assets to improve repeat-load performance.
  event.respondWith(caches.match(event.request).then((cached_response) => cached_response || fetch(event.request)));
});
