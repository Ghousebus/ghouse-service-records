// Minimal service worker — enables "Add to Home Screen" install prompt.
// No offline caching is done here since this app always needs a live
// connection to fetch/save service records.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Pass-through — always hit the network, no offline cache.
});
