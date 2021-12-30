'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0987d5e9a1d29201a8afe778fbd54147",
".git/logs/HEAD": "bed6d86473c3d41c12a916d044154aee",
".git/logs/refs/remotes/origin/main": "9e5a1192ae55e0e56709cfd76400d1e4",
".git/logs/refs/heads/main": "e37b8e8087e7919524be5a5a9b4d18d7",
".git/objects/8e/e83869fb5a9e00f9ba7ec452f33856ef96bc79": "d4aecac9171d174130da17e6ef77a191",
".git/objects/24/ff0966cfefbbc1d7121885dc1941e742acc09a": "a57cac4d9c5619aa5d9abe6e3048d83d",
".git/objects/f4/732979899a7e0c42e9d54ae926f8405dd92ad2": "7a30b040bdbe4ba3e185abdefb8f199e",
".git/objects/ec/f3b6ece21eacff9bd8928afb1cb83040edd7ac": "5128af68d66269973c769117f2772d11",
".git/objects/72/c27bb607056ad6f951dfc5363ff68932da2045": "6541683308702ec9255a700138f7b8e5",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/12/ac5ad62d951e158e1860f3eddbda8c9d78299c": "893730676f31ca41f553a57cab6edf1d",
".git/objects/7b/d8ca330434e18aac3e7abf6463dee3670c3733": "82cf89b330403ce93c9d9bb202268296",
".git/objects/c0/7df4b0af56c3e673fd0e701d70449c5be60352": "30669161d912f0582e893711c9428a09",
".git/objects/de/85fcc58e7d71eaf4c520e92d284474a02970e2": "fd9a0875eff79e0ee8063e768d6de67d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cc6193511fe95fe58fd482fe9b8c07087dcb27": "8ec8530bc6cd0f64f4e219d72ee91538",
".git/objects/85/db1218c8d5ad216d50d74ac03fdb45e6c15bf8": "9e2237ab4a1ef9c3dcccbec7a29826dd",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/ac/658b8aca6467036fd1983d88c87fba85299791": "2864fc865a179e73f05d955c3b519985",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/20/ebac1fbc164f48574d3e1a72798d72d5a62416": "cac6454ef6fd5680645e9bc4efc25df6",
".git/objects/28/e8667f5a10b217c55495f4fd564ed6cf078310": "e0b09d42aec07621ad64d8f44a601c1e",
".git/objects/63/df9aee5a536adb9678122857b17e9bb833b91e": "4d56f88b9b2e80e832d3285e123f7328",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/71/22603d6a778e8db1c624d3e4cd9c4d7ca9c32a": "bb0568bd4a7a450482e88f9865820cb8",
".git/objects/13/aec1f96de332b3ac65593da4fb8616e200d4e5": "bdd56f653006aa113150827e5ab95ccc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/54/c554ed8c436dc8f6e303a45b54da0d3c3b9d47": "c2d6e06a1b3e01c3ac736da974457c90",
".git/objects/54/0ac9de691608879cb3abb3b0af31bc9c66da07": "5368094f37656644f994650faf8b719d",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/dc/6d213dd93cabd92522b5f0feab275a4235607a": "72984144aa33d6c2273cc5d0ffc75e79",
".git/objects/6a/b547194636809303d15e896600532585956036": "2fef71f9f8cbc24c137f090884b0552e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/72b1db4faa86be7a1cf9e79c98e0f2aa8e26e0": "8b57d9819e970608ef484ce9531ad6dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/19/aa6670850a153b8cd67b32c138b248966b67fe": "b2e878f8948155ca7d91e6b427c104cc",
".git/objects/42/17fe0d7b86a1a1625aa5870932f125ec6d9faa": "78e5840def056f66f6c358c7730712d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0e1fe8900246db143145513eece75c19b6016f": "a4df3670d637bfdd144a0e3773fb81f6",
".git/objects/09/19e226b8c5348c94b316cf3412022f71d16dd5": "0a1b44b7b855dff1293795537dd2e5fc",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/4e/aac6fa580ff69bedd6679ea47aba2c0edf39d5": "4cee7d9e4f1aca96ca96d942ff3c1554",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0e/4ce7be6e433682bf5eb18ef12c405605f28e1c": "bea7339db619af84e0bc8800632c2627",
".git/objects/b6/8bb62b5d608e643fa9d96ad91be425ee74fb76": "2080bc6e0e185938fb9aa79224fcf968",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/53/53bdbfc10551e441359f89dc5dd89f879218b8": "7e169a558a7395741238e0864b37c6a7",
".git/objects/5d/1d20b274ab25c963f7bee05c0c995c1a90e6b7": "376fee9723e43660f0883f8b09a6e0cf",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d3f7be034c2407669fca4a64960ed036",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/ORIG_HEAD": "94d23d88e9afdfabf1425384cbe50a1b",
".git/config": "49b348ff1e473222ab3b915bba873285",
".git/index": "ec06eb0a502de433af630b253cb4e9b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "0c190e76abaab0e974f5f03f68e324de",
".git/refs/heads/main": "0c190e76abaab0e974f5f03f68e324de",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "984a5a72bd1123c4d00e4e25e695f66d",
".idea/misc.xml": "b56059142b5502a9fdd45a0bad88bcd7",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
"main.dart.js": "e3d0a02751a8007403a2bae0993effab",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "2315120e0ed5b1af3188fd82c9455f09",
"/": "2315120e0ed5b1af3188fd82c9455f09",
"manifest.json": "410af01410f50f8ed127b85562498629",
"version.json": "149c4b7488d7a97c06774afd24685564",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "777664b3c31b88848405e45e280df6ea",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
