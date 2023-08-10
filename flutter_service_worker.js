'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assests/fonts/Belanosima/Belanosima-SemiBold.ttf": "f56774b13535a9a8bb6b04b16cc02ded",
"assets/assests/images/cheLab.png": "23d187d2bf1fecd8242346992c9f871f",
"assets/assests/images/cheLec.png": "849c5b24fc1a033935c2c2f33a578f66",
"assets/assests/images/draw.png": "4e5caf66d7a7ff1eae10d61331cf22eb",
"assets/assests/images/homework.png": "cfe7f4d8749cabdb67ad64884c047a4c",
"assets/assests/images/icons/1.png": "616d7b8b2f2af31ce645a4e88a22cbb8",
"assets/assests/images/icons/C1FW6dDa_400x400.jpg": "37a1e556df9cfc52075aec8030729fb0",
"assets/assests/images/icons/cairo.png": "690beecb3fb83d3954a03a64da358ef9",
"assets/assests/images/icons/cogs_result.svg": "562980cfd52f06939559f6e2bc19aa96",
"assets/assests/images/icons/culogo.png": "118c5f8b599846c3a7c07ad3089d318f",
"assets/assests/images/icons/cu_web.png": "92859bffa65acf4e3ea684eb0f1ca6b5",
"assets/assests/images/icons/Google_Classroom.png": "353dd0b92f3ba764b1dbadabd1c2060b",
"assets/assests/images/icons/logo_stu.jpg": "acb6b911d4d34acdd33032cb2e9568f9",
"assets/assests/images/icons/logo_stu.png": "7177a4ca5b23e9148720c9709b9d9191",
"assets/assests/images/icons/logo_stu.svg": "4444d17f0299378ed0e3faf2745eedf3",
"assets/assests/images/icons/notion-icon.png": "58feb191fd6838318e309971895a4a94",
"assets/assests/images/image/Fac_eng_minified-620x279.jpg": "4d3db724858fd8131dfbbba4a9d65203",
"assets/assests/images/logo/Cufe%2520-logos_transparent.png": "84db3e60c41c36357fb7980a0140c2c8",
"assets/assests/images/logo/Cufe%2520-logos_white.png": "eb3fe22fdd1b51813861a64eb80c82b9",
"assets/assests/images/logo/Cufe-logos_black.png": "0e01c23a969ddbf6c0679feff11c3b38",
"assets/assests/images/medical-lab.png": "de061658f0d72d063d5cabf6afdca306",
"assets/assests/images/programming%2520(1).png": "7a49f9a35172d0180ced8379fac6aa6f",
"assets/assests/images/programming.png": "2edf0c660a72cc34bfeb0469646fbbac",
"assets/assests/images/project.png": "ef604111b866ebf052345cf84c5e9564",
"assets/assests/images/section/algebra.png": "0295457bb708cb92371470d1b8a6ba9a",
"assets/assests/images/section/calculas.png": "8c2314e1860f63ecda99b0796d56b7da",
"assets/assests/images/section/civil.png": "ee87c5a3df545fd04dcdfabfa7209660",
"assets/assests/images/section/geometry.png": "f99ec924a14aca052672dc2801626c03",
"assets/assests/images/section/lec.png": "207af25a5b3ff94899fe69591148ca82",
"assets/assests/images/section/mathLab.png": "1c4cd7f75aca760b9fa839f9b4b36e15",
"assets/assests/images/section/mech.png": "f02a93e39e85791383962a75e13a11de",
"assets/assests/images/section/mechaLab.png": "eec2b947afabe509d684b735b283a08f",
"assets/assests/images/section/physics.png": "b419ebd0d3d424e366adb0fda7bdcdad",
"assets/assests/images/section/workshop.png": "65e7dd51334bcdae8134ece3b934d108",
"assets/assests/images/seminar.png": "b90b2dd1535cf54a6ac29c5f156723b4",
"assets/assests/images/static.png": "0dc22dbd4bcc8213c9ac976b9f1e3d3e",
"assets/assests/images/subjects/applecation.png": "27cc6c29dafee09a2f9af9326df5671a",
"assets/assests/images/subjects/chemistry.png": "18aab75a6526e6564816ee8325459cad",
"assets/assests/images/subjects/civil-engineering.png": "d2b90bf3d622d4a38855f485ad23ca01",
"assets/assests/images/subjects/dynamics.png": "a95a9e40f67a71e6b8b85212a1b5d71d",
"assets/assests/images/subjects/humants.png": "0b1ff03989da79237c4be0b70a5694b4",
"assets/assests/images/subjects/math.png": "6b9beb743858ac9d53a6d59072d75952",
"assets/assests/images/subjects/math2.png": "fc0575441e89e38d0450a12dfae6b266",
"assets/assests/images/subjects/physics1.png": "cffd816533be33d63f59c047ade41495",
"assets/assests/images/subjects/physics2.png": "3067a16aa464794c2e028574ef39d2a4",
"assets/assests/images/subjects/production.png": "43e5798959f4c7d4fbd1639e68e7afea",
"assets/assests/images/subjects/programming.png": "aae1d99a471312372b8fd956f79b4827",
"assets/assests/images/subjects/statics.png": "5c42f83f86fcfd726309010180828fc0",
"assets/assests/images/tools.png": "611c507e840850bed5ebaf7f9cf2561a",
"assets/AssetManifest.bin": "0bf6d69a76876c426a90547332652000",
"assets/AssetManifest.json": "8ecd2926e9708d31c581d8429b6856a2",
"assets/FontManifest.json": "d1dcdd5577fcba8449ed78ad0e797afb",
"assets/fonts/MaterialIcons-Regular.otf": "117511d4400a1e714d903147452d1b54",
"assets/NOTICES": "01601a3974432ed1e7afbe4e6c9a2c61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "731b9bb89de5fce9b466fb12d10171dd",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "2901f082d53449907d4325e438e15708",
"icons/Icon-512.png": "b9d6edb83d303bd919a4ddbf373aab53",
"icons/Icon-maskable-192.png": "2901f082d53449907d4325e438e15708",
"icons/Icon-maskable-512.png": "b9d6edb83d303bd919a4ddbf373aab53",
"index.html": "52898ca10fd2d73286bb06cc6eb37ce2",
"/": "52898ca10fd2d73286bb06cc6eb37ce2",
"main.dart.js": "211b3424e738bde19a3e19328d014ab4",
"manifest.json": "316ab3ecc5a5189876ed0d368ee2f9ba",
"splash/img/dark-1x.png": "1d1391388f79b293fb28d4c623fa878e",
"splash/img/dark-2x.png": "1bad233a32933f316b7a43b23e790921",
"splash/img/dark-3x.png": "d98f0c8031cded0336106afb1f7d7be3",
"splash/img/dark-4x.png": "71ea5c3ab39ff6327409f7b3db430495",
"splash/img/light-1x.png": "db158c04438b1cb2fdc7fc9da8f65930",
"splash/img/light-2x.png": "597ddda980580cb789d04f59cc79a34e",
"splash/img/light-3x.png": "d22aee9ef36adbb250dd59a24cedf952",
"splash/img/light-4x.png": "1d6309b316378e62417dc66e4b63ee30",
"version.json": "b0dcc67fee2b9628ae36f393cd36d28b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
