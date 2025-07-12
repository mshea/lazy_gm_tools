const CACHE_NAME = '5eadb-tools-v1';
const urlsToCache = [
  '/index.html',
  '/css_js/5eadb.css',
  '/css_js/generator.js',
  '/tools/dice_roller/index.html',
  '/tools/combat_tracker/index.html',
  '/tools/encounter_calculator/index.html',
  '/tools/fof_monster_stats/index.html',
  '/tools/token_maker/index.html',
  '/tools/annotator/index.html',
  '/generators/npcs/index.html',
  '/generators/npcs/generator_text.js',
  '/generators/locations/index.html',
  '/generators/locations/generator_text.js',
  '/generators/treasure/index.html',
  '/generators/treasure/data.js',
  '/generators/traps/index.html',
  '/generators/traps/generator_text.js',
  '/generators/weapons/index.html',
  '/generators/weapons/generator_text.js',
  '/generators/armor/index.html',
  '/generators/armor/generator_text.js',
  '/generators/relics/index.html',
  '/generators/relics/generator_text.js',
  '/generators/dm_relics/index.html',
  '/generators/dm_relics/generator_text.js',
  '/generators/monuments/index.html',
  '/generators/monuments/generator_text.js',
  '/generators/2024_dnd_treasure/index.html',
  '/generators/2024_dnd_treasure/data.js',
  '/generators/tov_treasure/index.html',
  '/generators/tov_treasure/data.js',
  '/generators/scrolls/index.html',
  '/generators/scrolls/multi_source_data.js',
  '/generators/scrolls/multi_source_generator.js',
  '/generators/scrolls/spells_data.js',
  '/generators/spellbook/index.html',
  '/generators/spellbook/spells_wizard.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});