// sw.js - Service Worker for Tic-Tac-Toe Pro
const CACHE_NAME = 'ttt-pro-v1';
const assets = [
  './',
  './index.html',
  // Add paths to local images or icons here if you have any
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Cache-first strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
