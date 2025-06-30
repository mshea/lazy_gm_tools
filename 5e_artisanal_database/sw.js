// Kill switch service worker - clears all caches and unregisters itself
// This will stop the PWA from making requests to your server

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    Promise.all([
      // Delete all caches
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }),
      // Clear any background sync registrations
      self.registration.sync && self.registration.sync.getTags().then(function(tags) {
        return Promise.all(
          tags.map(function(tag) {
            return self.registration.sync.unregister(tag);
          })
        );
      }),
      // Send message to all clients to reload
      self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({
            type: 'SW_DISABLED',
            message: 'Service worker has been disabled. Page will reload.'
          });
        });
      })
    ]).then(function() {
      // Unregister this service worker
      console.log('Service worker cleared all caches and will unregister');
      return self.registration.unregister();
    })
  );
});

// Don't handle any fetch requests - let them go to network
self.addEventListener('fetch', function(event) {
  // Do nothing - let all requests go to network
  return;
});

// Send notification that SW is being killed
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});