'use strict';

const CACHE_VERSION = 'yape-pwa-status-color-v247-20260903';
const APP_SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon-32.png',
  '/icon-180.png',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png'
];

async function cacheAppShell() {
  const cache = await caches.open(APP_SHELL_CACHE);
  await Promise.all(
    APP_SHELL.map(async (asset) => {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response.ok) await cache.put(asset, response);
      } catch (_) {
        // Un recurso individual no debe impedir la instalación completa.
      }
    })
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheAppShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('yape-pwa-') &&
            key !== APP_SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  const type = event.data && event.data.type;
  if (type === 'SKIP_WAITING') self.skipWaiting();
  if (type === 'CACHE_APP_SHELL') event.waitUntil(cacheAppShell());
});

async function navigationResponse(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      try {
        const cache = await caches.open(RUNTIME_CACHE);
        await cache.put('/index.html', response.clone());
      } catch (_) {
        // La navegación debe continuar aunque el almacenamiento esté lleno.
      }
    }
    return response;
  } catch (_) {
    return (await caches.match(request)) ||
      (await caches.match('/index.html')) ||
      (await caches.match('/'));
  }
}

async function staticResponse(request) {
  const cached = await caches.match(request);
  const network = fetch(request)
    .then(async (response) => {
      if (response.ok && response.status === 200) {
        try {
          const cache = await caches.open(RUNTIME_CACHE);
          await cache.put(request, response.clone());
        } catch (_) {
          // Entrega la respuesta de red aunque no se pueda guardar.
        }
      }
      return response;
    })
    .catch(() => null);

  return cached || (await network) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (request.headers.has('range')) return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname === '/manifest.webmanifest') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(new Request(request, { cache: 'no-store' }));
        if (fresh && fresh.ok) {
          const cache = await caches.open(RUNTIME_CACHE);
          cache.put('/manifest.webmanifest', fresh.clone()).catch(() => {});
        }
        return fresh;
      } catch (_) {
        return (await caches.match('/manifest.webmanifest')) || Response.error();
      }
    })());
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(navigationResponse(request));
    return;
  }

  event.respondWith(staticResponse(request));
});

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (_) {
    payload = { body: event.data ? event.data.text() : '' };
  }

  const data = payload.data || {};
  const notification = payload.notification || {};
  const title = notification.title || data.title || payload.title || 'Notificación';
  const body = notification.body || data.body || data.text || payload.body || '';
  const targetUrl = data.url || data.click_action || './index.html';
  const tag = data.transferId || data.tag || '';
  const options = {
    body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    vibrate: [180, 80, 180],
    data: { url: targetUrl }
  };
  if (tag) {
    options.tag = tag;
    options.renotify = true;
  }

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const requestedUrl = new URL(
    (event.notification.data && event.notification.data.url) || './index.html',
    self.registration.scope
  ).href;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(async (clients) => {
        for (const client of clients) {
          if ('navigate' in client) await client.navigate(requestedUrl);
          if ('focus' in client) return client.focus();
        }
        return self.clients.openWindow(requestedUrl);
      })
  );
});
