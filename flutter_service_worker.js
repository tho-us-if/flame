'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"manifest.json": "88a09d3520ee1c1fd7ad820a705bfc83",
"index.html": "ef018f5e88732366dff73fb2f783f05a",
"/": "ef018f5e88732366dff73fb2f783f05a",
"CNAME": "8e32dacbd784540bf8395759dbf64cef",
"assets/AssetManifest.bin": "be3c96bf7ebde93c1aab85834d408769",
"assets/fonts/MaterialIcons-Regular.otf": "4e64c72ceb53bb21da2252944fc9743d",
"assets/assets/images/buttons.png": "687cad0e630d10a2dd4576bb9cefc76d",
"assets/assets/images/sprite_sheet.png": "9e133b5dee9f06d118d73189ff60d586",
"assets/assets/images/flame.png": "954516e8356e4dacd6b6d1244832a811",
"assets/assets/images/shield.png": "305198a3a137aff47c4dad14a16ef731",
"assets/assets/images/trex.png": "1876fad2b35fa1f8e5c7c0f0e3f476cc",
"assets/assets/images/bomb_ptero.png": "5d8ecf64f191fbb3a3625eae665ce18a",
"assets/assets/images/Car.png": "660b04b0495bfbb5dd05191a5fb92487",
"assets/assets/images/speech-bubble.png": "01214e16b2f1007c03a4b922410767ed",
"assets/assets/images/ranger.png": "9642a86961feeb0410d635e90ee96451",
"assets/assets/images/tile_maps/tiles.png": "31fa057544cc041e9e7ff94ab05ba444",
"assets/assets/images/tile_maps/selector-short.png": "ce3d5316fa41cc481d3603767e2749a6",
"assets/assets/images/tile_maps/selector.png": "952098264419a65b7ff4c8b655ca31b9",
"assets/assets/images/tile_maps/tiles-short.png": "359a0523ea9404c4922b85d452b13d19",
"assets/assets/images/pizza.png": "e9b30fb29ca158301577d7928efb1a56",
"assets/assets/images/0x72_DungeonTilesetII_v1.4.png": "c8a8bc9368d564439869818fe7c577d6",
"assets/assets/images/zap.png": "d57c02b537efae0396d30640470da7c9",
"assets/assets/images/knight.png": "692e6b25bc9b4e793c57fb29519d9cb1",
"assets/assets/images/nine-box.png": "335c163c95e87c00e0c293d8d424ae58",
"assets/assets/images/boom.png": "3172e300cf7c040566fb873e001c706b",
"assets/assets/images/retro_tiles.png": "ee8006287c8becafed1d18272b4c669c",
"assets/assets/images/animations/robot.png": "99f66a0b2c024669d8dbe037b73b7b5c",
"assets/assets/images/animations/robot-idle.png": "ce3493ed1129fa00c14b4b8ff1a74bd0",
"assets/assets/images/animations/chopper.png": "530485b0033f6debb146c0f2714126bb",
"assets/assets/images/animations/lottieLogo.json": "07e6d1f37a8ff5a69e540ee85d2fb6e3",
"assets/assets/images/animations/ember.png": "3027f5f0b80b46ee1ae2463f2ab3d1ce",
"assets/assets/images/animations/chopper.json": "3a292092669b53cae0f334548a9641ee",
"assets/assets/images/animations/creature.png": "5e52950ac303c1b529e9005317459665",
"assets/assets/images/mage.png": "237eba7f9bf3fee6725cc33a4b7df7f1",
"assets/assets/images/layers/enemy.png": "4ec6e5d783c40795a975802ca12d7096",
"assets/assets/images/layers/player.png": "fe28e301569a4e84a2090ad626d4498d",
"assets/assets/images/layers/background.png": "84139b28b82f7aac50a3ca347e613a80",
"assets/assets/images/rogue_shooter/bullet.png": "8eca41372586b4d2446c22bee1fe77f2",
"assets/assets/images/rogue_shooter/enemy.png": "8dfb2f04967b1156a257c05f282ff8c6",
"assets/assets/images/rogue_shooter/player.png": "4e31815075ec7e496a099af35c2997ed",
"assets/assets/images/rogue_shooter/stars.png": "839baa9b3605e008cb4008d3be7f048a",
"assets/assets/images/rogue_shooter/explosion.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/joystick.png": "63d9ebbe96ee5bc90d30ace210a1daec",
"assets/assets/images/parallax/mountains.png": "2da5aac8deab66c66347a8a4c099af99",
"assets/assets/images/parallax/mountain-far.png": "9c3b7ece9ddeec681c041dbecabab8ca",
"assets/assets/images/parallax/license.txt": "7d7af04eb247cd4cb9431659e38873f2",
"assets/assets/images/parallax/foreground-trees.png": "097b64262e32ef41a4790f419496efcc",
"assets/assets/images/parallax/bg.png": "0ec31e1a99ecb526afee996afa39dc08",
"assets/assets/images/parallax/heavy_clouded.png": "2ffed52373c8fb8dbdc2ba75c4eff9ae",
"assets/assets/images/parallax/rain.png": "a4d910148bc9d475b0196c34d2ce368a",
"assets/assets/images/parallax/trees.png": "250c708291956aa10b61484940f1c0ab",
"assets/assets/images/parallax/airplane.png": "2388932061bf02c6e9fafaab0305bbe9",
"assets/assets/images/parallax/city.png": "a33b2eff67445ebb0512b8b5e3b1d4b4",
"assets/assets/spine/spineboy-pro.json": "968f6f4ebddae191e2e112f02f213214",
"assets/assets/spine/spineboy.atlas": "472d7e7fbe884935850f012452bd9f46",
"assets/assets/spine/spineboy-pro.skel": "04df1d1470a63f9cc5435d8446fea273",
"assets/assets/spine/spineboy.png": "92f773f87e1c32304b74953e1bfa403d",
"assets/assets/spine/LICENSE": "2896607b2195b46995804daba87636e6",
"assets/assets/audio/music/bg_music.ogg": "e0ee19692c51bd7e07713a82d570c099",
"assets/assets/audio/sfx/fire_1.mp3": "458f08df07b70378a4dc37ca64af311f",
"assets/assets/audio/sfx/fire_2.mp3": "f8d02b968e3f3eaa373d7cc44a4c0102",
"assets/assets/svgs/checkerboard.svg": "2375139eb8b48d6a3b10d75f36cb0886",
"assets/assets/svgs/green_balloons.svg": "3d61f785b2499c41365ceec5f6096717",
"assets/assets/svgs/red_balloons.svg": "767935610e45c2201655aa79da84c8c4",
"assets/assets/svgs/happy_player.svg": "9b99470a5aec73cfc3f405c7ad6bc8cd",
"assets/assets/tiles/0x72_DungeonTilesetII_v1.4.tsx": "854a57933f4dff949837c0c60e0e5fed",
"assets/assets/tiles/dungeon.tmx": "a68f8f8a385c7113781ebb4fbfe880bc",
"assets/AssetManifest.bin.json": "cc624351e7b9ddf84272b78072bd1461",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "bbeda8bb776da9cb7cdc792a69a053df",
"assets/AssetManifest.json": "66147209d7e60894b4740646b6eeee49",
"assets/packages/trex_game/assets/images/trex.png": "1876fad2b35fa1f8e5c7c0f0e3f476cc",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.js": "4a3b37dbb48f98ad73e4ae8907d80605",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.wasm": "3482942c2423e31568a17e1cd2cf6e20",
"assets/packages/rogue_shooter/assets/images/rogue_shooter/bullet.png": "8eca41372586b4d2446c22bee1fe77f2",
"assets/packages/rogue_shooter/assets/images/rogue_shooter/enemy.png": "8dfb2f04967b1156a257c05f282ff8c6",
"assets/packages/rogue_shooter/assets/images/rogue_shooter/player.png": "4e31815075ec7e496a099af35c2997ed",
"assets/packages/rogue_shooter/assets/images/rogue_shooter/stars.png": "839baa9b3605e008cb4008d3be7f048a",
"assets/packages/rogue_shooter/assets/images/rogue_shooter/explosion.png": "81a3691935a18a30572870b759ad1683",
"favicon.png": "81272279ec86e161b1010d5a054d64b6",
"main.dart.js": "0645065135af2d474e240318e7d67ddd",
"version.json": "4653b2532bbba4b978e96a6ac540b654",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"icons/Icon-512.png": "57e9259701525432fe4c5b387756cf37",
"icons/Icon-192.png": "70d7d916a81b58a1856a761fea85e63b"};
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
