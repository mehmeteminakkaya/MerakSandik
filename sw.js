const CACHE_NAME = "meraksandik-v48";
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/manifest.json",
  "/logo.jpg",
  "/icon-192.png",
  "/icon-512.png",
  "/library-bg.jpg",
  "/library-bg-light.jpg",
  "/meow.mp3",
  "/meow-sweet.mp3",
  "/purr.mp3",
  "/growl.mp3"
];
// fireplace.mp3/rain.mp3/ocean.mp3 (~13MB combined) are NOT precached — the
// fetch handler below caches them opportunistically the first time ambience
// is played, so install stays light for users who never touch that toggle.

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Sadece aynı origin'deki GET isteklerini cache'ler.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // Ağ öncelikli: her zaman en güncel dosyayı çekmeyi dener (aksi halde her
  // deploy sonrası eski kullanıcılar bayat CSS/JS'te takılı kalır), sadece
  // ağ başarısız olursa (çevrimdışı) cache'e düşer.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) caches.open(CACHE_NAME).then((cache) => cache.put(req, res.clone()));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
