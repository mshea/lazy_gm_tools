// Service Worker for 5e Artisanal Database
// Caches ALL files on first install by fetching the cache manifest

const CACHE_NAME = '5e-adb-v1.0.5';
const CHUNK_SIZE = 50; // Files per chunk for iOS compatibility

// Install event - fetch manifest and cache everything
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    cacheAllFiles()
      .then(() => {
        console.log('Service Worker: All files cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache files:', error);
      })
  );
});

// Fetch the cache manifest and cache all files
async function cacheAllFiles() {
  try {
    // Fetch the manifest file
    const response = await fetch('./cache-manifest.txt');
    const manifestText = await response.text();
    
    // Parse file list
    const files = manifestText.split('\n').filter(line => line.trim() !== '');
    
    console.log(`Service Worker: Found ${files.length} files to cache`);
    
    // Cache files in chunks
    await cacheFilesInChunks(files);
    
  } catch (error) {
    console.error('Service Worker: Failed to load cache manifest:', error);
    throw error;
  }
}

// Cache files in chunks to avoid iOS timeouts
async function cacheFilesInChunks(files) {
  const cache = await caches.open(CACHE_NAME);
  const totalChunks = Math.ceil(files.length / CHUNK_SIZE);
  
  console.log(`Service Worker: Caching ${files.length} files in ${totalChunks} chunks...`);
  
  for (let i = 0; i < files.length; i += CHUNK_SIZE) {
    const chunk = files.slice(i, i + CHUNK_SIZE);
    const chunkNum = Math.floor(i / CHUNK_SIZE) + 1;
    
    try {
      console.log(`Service Worker: Caching chunk ${chunkNum}/${totalChunks} (${chunk.length} files)...`);
      await cache.addAll(chunk);
      console.log(`Service Worker: Chunk ${chunkNum}/${totalChunks} cached successfully`);
      
      // Small delay between chunks to be gentle on iOS
      if (chunkNum < totalChunks) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
    } catch (error) {
      console.error(`Service Worker: Failed to cache chunk ${chunkNum}:`, error);
      console.error('Chunk contents:', chunk);
      // Continue with next chunk instead of failing completely
    }
  }
  
  console.log('Service Worker: Chunked caching complete');
}

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache first
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Otherwise fetch from network (fallback for files not in manifest)
        return fetch(event.request)
          .catch(error => {
            console.error('Service Worker: Network fetch failed:', error);
            
            // Return offline fallback for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            
            throw error;
          });
      })
  );
});

// Listen for messages from the main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});