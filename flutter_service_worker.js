'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "42e944c15608823ee166a7e240660d2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/b6/14f7549ece52c98705913fe22e541357cd5e9b": "c401691fed1eaea96d9dbf8d1dec4423",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/30/26ae799fff8aa839f4c672173d4fc098eeae15": "7af7fcd85495c688fac49790be94f5c4",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/11/b83b7abfbd0dcdd64fc64e799951128110507b": "d5a497435ecaf3a15af05d828d7ada0f",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/77/483935ca2c7cbea09971bad0c1460716b81abe": "be9574ea71913df6871b1f3a30d6c54d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/72dc80dcb82fb398139ab093ed34099096f02c": "f54f1dc4ffb6a3f3fc67505693c27fe8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/87/7694efa362e61675b8e3080fce0027c92ac888": "ca86b2cdf662589ff819aaffc7c136ba",
".git/objects/d6/a34c3ff63f2b38ffb05041d0097faeee138620": "e47bec2df577b1b00b4840fd9b7b33f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/50/43986424ce31549bec0649cc43993bb77ce7c6": "7d07be5a3a03c929993123f5441cddd0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/dc/7a1cf5deaa0b14df3e8752b0e7dc7b2ba8c261": "f2e37d215e79a832ab4362481b660c6e",
".git/objects/dc/ad5b9526fc1a5a1a6dcf79623c59b8ee611828": "2cba7eba84f45469b8fc55632ea6c803",
".git/objects/f4/b7e004c2fbf5471d6e882297addd7b40e03058": "07ae2c92dad54d546debac6dcc8a19e0",
".git/objects/f4/cf94f292bf763222469b0e39d6eabf07ac6a0b": "49700a33e4443896dd119562c7a2a29d",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/21/2549700ee53cfb908a46edf0417417df169406": "84e5a8c612e2f9675c3b9278a0734787",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/d4/cd207d49f766038141755cbd910b9c951606b8": "6ebfcb1869648383ab4ac924a09a3779",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/15/9e06b735d650707b86fe9e81c18f77becefc69": "057c42465e4d2b7f8347d2d1f33d34a5",
".git/objects/15/d072d3959c7d0e19f986f2e1770eb53679e221": "c77772f903c868286a276462682ba4d5",
".git/objects/8c/e31100d6461e67f0fb0f0c8b3b8451954c2fb7": "19e99ae3b49576fcecf759e510063f36",
".git/objects/75/1bb468e55c5f74d7938dfb344ce54866040353": "52c14f4613b0f3422dc5b763d3826d54",
".git/objects/e2/7b91f066422f007a17fb9d751f55469216510a": "1098aaaf4b76f61d796860a51d123e4d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/02/8c9c4eb931b239f7fd2ea70364e586270b5e6c": "0c97720f90923f04dfbd53c66232f291",
".git/objects/a1/6d222d25b36e117c2975f3436071a1b5260bd2": "7832830b742f364d431220aaca4c8fe1",
".git/objects/7f/e87e25148d5820149e7ae7cbe317a35666a40f": "e5294a61a1c509999fdf82de42d4f748",
".git/objects/16/05669500b5199bf5c4b713b4ab6e427b6eda62": "da1bdea17060286c4ca343ac7531e997",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/5f/dd5469bea7fbc9ebff35772e7c2e7cd43d340c": "e8bb6614f766f682dcd624698bd60cf5",
".git/objects/56/7a0158d9e32fb49977ee3074d4557f7275e775": "0ebabe97674515a0623b37e922ffd83b",
".git/objects/56/f6a60649c19fbc8bbf7549005ff4b2f71e714e": "36fafe4ea71b8b823bfd27df196500e2",
".git/objects/cb/3a36e0b411c6d620535242900b87c9660748bf": "5a423f072eacad2f3be7d3a3bda2361c",
".git/objects/de/c0d7f1f0f0060ca15056c2497ecac9259bad8f": "3b9a9ca7e4efabf1207108bfbf130008",
".git/objects/c6/6d1ed9d36c6dea4368278cc0482ca8fb1d86eb": "7ec1654ce60a0abf2a42ff5dc720fbd7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/609ba1ea5ede4d6bac81d78dbdd99af8849d0f": "770df91596f9d6176e4335114deb1587",
".git/objects/f8/fdcf37525b8562f047e7c80ebee9afa7273d3b": "fa74adf5771e7b273c4fd004514ebaae",
".git/objects/f3/9ed2844d918fad7b5a7c56c8ee9153464ea9f4": "1be3981792244057b97fd17b0604646c",
".git/objects/70/d193ae40207485a147c99063b897a988cd89db": "0764bb3c266212a309a28e0e5be9d05a",
".git/objects/69/09f2b0a132b09e5b753c11dc86c9924cbf51d0": "61f8058fa5603e90f65ce027a0820300",
".git/objects/8b/bc3f281c63f864133efce7b573a5dcdc8a6f79": "76966cf8fc621d04fd140aff45900095",
".git/objects/c0/71cdba577ddfba10439fd19dccd62ee16c7501": "1902b10dfd7cdb1d34cc6584b5b645ee",
".git/objects/a4/f4446ef0d84937e24b73ee00051959f785aef8": "6f6afffc60e0ab3cb98a39bed9c3e1ea",
".git/objects/ef/4cf98980bde2284a88ae1dd4c657e51495468d": "063956d64e1bbcb5ef68dff26d280148",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/23/50c9a9cf98266e18b3e654dee2ca252277dbaa": "24f827172b971da756959404b879910f",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/1f/157f210ee42e6400cbac61db47f54ecdaa955f": "3b71986f22df2a865eff1602549b5f25",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/63/a9a32bc3b1ec23721659fa2fabce7e5a140ca0": "dd48c9e5c01eef626b44d1b76cae298d",
".git/objects/63/ddeb80e91ecff0df39bce19e81795607c4566d": "f4cce5d8c7e6085dfa5c816501c4bf53",
".git/objects/09/5e2db2b255c2b52ef304d5725614ef25671e26": "89ef154c32752080c1e3bd71a16c7772",
".git/COMMIT_EDITMSG": "83d043db4fdfe6882fb7f01a09d92b11",
".git/index": "49e7b648b62d911ff72157a5b4917484",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/HEAD": "9e0e51be46f89d15405efc7b0debaf85",
".git/logs/HEAD": "8bea0843454ac454233dcbdff0c16d57",
".git/logs/refs/remotes/cinema/13.12.2023": "1fe4fa622a46239ae71e96b305cb1844",
".git/logs/refs/heads/13.12.2023": "8bea0843454ac454233dcbdff0c16d57",
".git/refs/remotes/cinema/13.12.2023": "93ac6172a6e0dced1bd0fa89ad8b96d5",
".git/refs/heads/13.12.2023": "93ac6172a6e0dced1bd0fa89ad8b96d5",
"main.dart.js": "5b451f064dcfe19c52b368e554995514",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"manifest.json": "5735540830c1ccbebc7c5cf18d980ffd",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "2958dbb1211ffa726ee400d2da6f05a4",
"/": "2958dbb1211ffa726ee400d2da6f05a4",
"version.json": "4934f9d0c6d6e5c4ea9b06deaf8aed63",
"assets/AssetManifest.bin": "f8cd5b98a90b1b443ca8a2a532811335",
"assets/NOTICES": "676d5ab6ae6aac7e41c758a8ae0515c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "6bc236c7dc0fa9869d14a1962d797c22",
"assets/images/Venom.jpg": "eff4cf53b2bb64c5386e6e1dc5247446",
"assets/images/MK.jpg": "b40684868759f503e237b0e1129dee72",
"assets/images/mainScreen.png": "160e3ae96b13892801b58eab15d0d521",
"assets/images/diamondHand.jpg": "62f34436efaa9be90dee897c77215a72",
"assets/images/Venom2.jpg": "dad2fe8d2218c82c054ee8b041c1bb1d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "6e5a59d0c37c58223fca39c7d72b0287",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/FontManifest.json": "18f7331e7e36e5b37a1c4cec98c2801a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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
