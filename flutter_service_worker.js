'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d619bc135310feabea9df099a908ed2a",
".git/config": "42e944c15608823ee166a7e240660d2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "9e0e51be46f89d15405efc7b0debaf85",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a0653d0abb25c9fd20e2ea9d9d57c642",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1455648c30063d225153d75a590ce993",
".git/logs/refs/heads/13.12.2023": "1455648c30063d225153d75a590ce993",
".git/logs/refs/remotes/cinema/13.12.2023": "4a193827d2fce2a64b55fc8606256abf",
".git/objects/01/b8103c0cb36a2feabed588b5cf40bab9d4509e": "ae65e8fea0b05063959958d88b118513",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/02/8c9c4eb931b239f7fd2ea70364e586270b5e6c": "0c97720f90923f04dfbd53c66232f291",
".git/objects/02/d6d6e35fa85da3ee809882ac65ec3fafe771a5": "3ea66817d3b1bfdc65fa277e6edebd76",
".git/objects/04/df91d2ca8d1c945e18da78f85a86ffea84bc99": "c82dc9dee81490e86accda45adbc46b5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/09/5e2db2b255c2b52ef304d5725614ef25671e26": "89ef154c32752080c1e3bd71a16c7772",
".git/objects/0c/36a2d9828cadd455e23f09b037dec522f5f951": "f5eaf737bb558cb92eac82e22f623e1f",
".git/objects/0c/ba65e085e273135867e102f00ba38e87806392": "e0a3dbf643807428149e6fb847db86ef",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/cf7e80c3f6d138edd32a1bd8769061debfc361": "0dbb383e3f5159c9cae55599d42d5cf3",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/b83b7abfbd0dcdd64fc64e799951128110507b": "d5a497435ecaf3a15af05d828d7ada0f",
".git/objects/15/9e06b735d650707b86fe9e81c18f77becefc69": "057c42465e4d2b7f8347d2d1f33d34a5",
".git/objects/15/d072d3959c7d0e19f986f2e1770eb53679e221": "c77772f903c868286a276462682ba4d5",
".git/objects/16/05669500b5199bf5c4b713b4ab6e427b6eda62": "da1bdea17060286c4ca343ac7531e997",
".git/objects/1a/f584d8fcf7a672f91fda85e450065db320dae4": "5e9e7798e4d7213a262f06aec4a38b27",
".git/objects/1f/157f210ee42e6400cbac61db47f54ecdaa955f": "3b71986f22df2a865eff1602549b5f25",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/2549700ee53cfb908a46edf0417417df169406": "84e5a8c612e2f9675c3b9278a0734787",
".git/objects/23/50c9a9cf98266e18b3e654dee2ca252277dbaa": "24f827172b971da756959404b879910f",
".git/objects/23/fa8fe211a6c28c03075330f924442bde82b043": "b716a7f0a91a463762d1049264d3d24e",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2e/23f74688569e41431bcc2b3057d4016e0b7d8e": "d43e9840e83024b9b0102aa9279cdbb9",
".git/objects/30/26ae799fff8aa839f4c672173d4fc098eeae15": "7af7fcd85495c688fac49790be94f5c4",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/a3402224b21dec47f4737d6a0aa4251b8cb975": "8496f1590183b9935a9401167c488e0c",
".git/objects/4b/e6bcdab3493d83d8ee9e4255611ea93918a9b6": "0a32511a1b5c72192865358f72631626",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/43986424ce31549bec0649cc43993bb77ce7c6": "7d07be5a3a03c929993123f5441cddd0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/7a0158d9e32fb49977ee3074d4557f7275e775": "0ebabe97674515a0623b37e922ffd83b",
".git/objects/56/f6a60649c19fbc8bbf7549005ff4b2f71e714e": "36fafe4ea71b8b823bfd27df196500e2",
".git/objects/57/d1a92f98937bd39ba63c388ff219cf2d132369": "e2aa83acb39462ac17d5bfe045ba2397",
".git/objects/5f/dd5469bea7fbc9ebff35772e7c2e7cd43d340c": "e8bb6614f766f682dcd624698bd60cf5",
".git/objects/63/6bf56b5b65de68d43d93d86821f443a8d5f6c7": "5ccb112547f349e0a81be83419a79035",
".git/objects/63/a9a32bc3b1ec23721659fa2fabce7e5a140ca0": "dd48c9e5c01eef626b44d1b76cae298d",
".git/objects/63/ddeb80e91ecff0df39bce19e81795607c4566d": "f4cce5d8c7e6085dfa5c816501c4bf53",
".git/objects/64/05deaa0fcd16519f6e48ecc00ede08be0e96f6": "dd34bad1193751ea3b34b63bb3bf09da",
".git/objects/69/09f2b0a132b09e5b753c11dc86c9924cbf51d0": "61f8058fa5603e90f65ce027a0820300",
".git/objects/6b/584d453a6f5bed5d4a1131174535ba2ff50582": "eded6a8daa3eb9da82c180818c745414",
".git/objects/6e/c47f8cd3ea4baa4c2ad5adc57259962da38084": "46623b96cca89a7c45b6b9b02818c851",
".git/objects/70/d193ae40207485a147c99063b897a988cd89db": "0764bb3c266212a309a28e0e5be9d05a",
".git/objects/75/1bb468e55c5f74d7938dfb344ce54866040353": "52c14f4613b0f3422dc5b763d3826d54",
".git/objects/77/483935ca2c7cbea09971bad0c1460716b81abe": "be9574ea71913df6871b1f3a30d6c54d",
".git/objects/7a/245a1d633e720a2c51a49d400a2951e21aa5aa": "fc87846c1137d4fead87175ffb80e61a",
".git/objects/7f/e87e25148d5820149e7ae7cbe317a35666a40f": "e5294a61a1c509999fdf82de42d4f748",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/87/7694efa362e61675b8e3080fce0027c92ac888": "ca86b2cdf662589ff819aaffc7c136ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bc3f281c63f864133efce7b573a5dcdc8a6f79": "76966cf8fc621d04fd140aff45900095",
".git/objects/8c/c1d24ebe3fe7493aea0ab4358684e30d64df1a": "e4e63d7a07708c03c24296855d53b694",
".git/objects/8c/e31100d6461e67f0fb0f0c8b3b8451954c2fb7": "19e99ae3b49576fcecf759e510063f36",
".git/objects/8e/f701141341e60d295094822a286df35d100947": "4277f3446f14bc40ea13cd11b0241558",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a0/4dafc396ba5242860c62939f3b50305ec6a459": "7fe99c894bc3ddb01b6c5185199d1af5",
".git/objects/a1/6d222d25b36e117c2975f3436071a1b5260bd2": "7832830b742f364d431220aaca4c8fe1",
".git/objects/a4/d18354c9c7423fcc250f91bb2968923e124926": "4ce52b49db39ae3e3f0724076091a063",
".git/objects/a4/f4446ef0d84937e24b73ee00051959f785aef8": "6f6afffc60e0ab3cb98a39bed9c3e1ea",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/7193dcf390abb2e16b213ed783d549882a069e": "e8f5646f4113ed20114df3d3fb7c2f0a",
".git/objects/a8/72dc80dcb82fb398139ab093ed34099096f02c": "f54f1dc4ffb6a3f3fc67505693c27fe8",
".git/objects/a8/e012c96ce17b6b3d6d5286efbd771f14d7413e": "60cd787712afff8c1bec4d4a49211f74",
".git/objects/aa/f5cccbd5abbfd12fcae3d33a025bea60b04ecc": "b42100ff7286f00ca483b64c535e26c2",
".git/objects/ad/401154a4752449f71305f4b3dd5c1019617f7f": "d57a3abe4ec9207d9663251f255b01a5",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b6/14f7549ece52c98705913fe22e541357cd5e9b": "c401691fed1eaea96d9dbf8d1dec4423",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/6ce597002c7e4e09cb7a177bc25e0177b8cf59": "05bdd872747d25aaa0c4ea0a60dc0074",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/780ea99595c3562fa158b7643134b65e692f5b": "50d9820cbb3751ebb9f5404c071c0f07",
".git/objects/c0/71cdba577ddfba10439fd19dccd62ee16c7501": "1902b10dfd7cdb1d34cc6584b5b645ee",
".git/objects/c1/1002c3fc71d29eedecddf21b9bd2ec59b2bbc6": "67de9b828d5d425f73465a4faee1e401",
".git/objects/c3/68ba19b71501b36a18d45210e92ef25574064f": "39eb17107a502e33f3b84714a15806cf",
".git/objects/c5/fec1be178ffc50b7ff099171cbd34645bdb9df": "f8c8f1486dcec2e4e8bcaf499eb1dc6c",
".git/objects/c6/6d1ed9d36c6dea4368278cc0482ca8fb1d86eb": "7ec1654ce60a0abf2a42ff5dc720fbd7",
".git/objects/ca/d647435eecd0690e60e724c5daa3864ee6815e": "c831a73a426f830a856b8095a83e9bf2",
".git/objects/cb/3a36e0b411c6d620535242900b87c9660748bf": "5a423f072eacad2f3be7d3a3bda2361c",
".git/objects/d3/bcd68daedc754866fc62c1f42abf340580c9e1": "713eacd381c176115975783650cd3b5d",
".git/objects/d3/c853f64db59fca961529d79fd2482e496a1094": "73c3d68d76a419c91d1a7a5b1baf1c93",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/cd207d49f766038141755cbd910b9c951606b8": "6ebfcb1869648383ab4ac924a09a3779",
".git/objects/d5/8393814a4f7c096d50604573a6e4c6d0a8a19d": "49b11928c41b02999c4ba1065e79f947",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a34c3ff63f2b38ffb05041d0097faeee138620": "e47bec2df577b1b00b4840fd9b7b33f0",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/aff49ea3e36c858879997fc2db66eae90ff0b8": "c5be3800ed53459be881f7cd5e9549bf",
".git/objects/da/454697635b317d236e42065d2d523bedddaad0": "1571891abd73e86d355dbaccf6ea5177",
".git/objects/da/6752bd63659ac77a1dc121a64fcbd301b7a06f": "ff80360add89706bc330a3c662c69e78",
".git/objects/dc/7a1cf5deaa0b14df3e8752b0e7dc7b2ba8c261": "f2e37d215e79a832ab4362481b660c6e",
".git/objects/dc/ad5b9526fc1a5a1a6dcf79623c59b8ee611828": "2cba7eba84f45469b8fc55632ea6c803",
".git/objects/dc/c0b9df6a93eebcab713a23e5849846bc5ef01c": "5c52786e671e87d2f7f110f0042cd1dc",
".git/objects/dc/e62a50a64ea9e55a636d6b0a8eb473f67d79d3": "d764a65bd6a4d35b9989add98c59ea58",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/c0d7f1f0f0060ca15056c2497ecac9259bad8f": "3b9a9ca7e4efabf1207108bfbf130008",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/7b91f066422f007a17fb9d751f55469216510a": "1098aaaf4b76f61d796860a51d123e4d",
".git/objects/e6/609ba1ea5ede4d6bac81d78dbdd99af8849d0f": "770df91596f9d6176e4335114deb1587",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/bcbc69ccc7a8a152913a46481f94219edb04b1": "6e2c7b58457533e970c6c4e6aac17eed",
".git/objects/ef/4cf98980bde2284a88ae1dd4c657e51495468d": "063956d64e1bbcb5ef68dff26d280148",
".git/objects/f3/9ed2844d918fad7b5a7c56c8ee9153464ea9f4": "1be3981792244057b97fd17b0604646c",
".git/objects/f4/b7e004c2fbf5471d6e882297addd7b40e03058": "07ae2c92dad54d546debac6dcc8a19e0",
".git/objects/f4/cf94f292bf763222469b0e39d6eabf07ac6a0b": "49700a33e4443896dd119562c7a2a29d",
".git/objects/f6/c595c400221f6e8ed6b830b4c9882f73f45323": "8ebb6886bc26159fde33db4881ddcc26",
".git/objects/f8/fdcf37525b8562f047e7c80ebee9afa7273d3b": "fa74adf5771e7b273c4fd004514ebaae",
".git/objects/fa/195448720a358a50d7f11d98e9e885f66d3c8b": "19aebb4443e15f3eb4deb52d84392626",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/13.12.2023": "6440063f1fa49e67d8a5ffbaf7d0227a",
".git/refs/remotes/cinema/13.12.2023": "6440063f1fa49e67d8a5ffbaf7d0227a",
"assets/AssetManifest.bin": "f8cd5b98a90b1b443ca8a2a532811335",
"assets/AssetManifest.bin.json": "f1ca1053da78a03cf0ffe40373ad8063",
"assets/AssetManifest.json": "6bc236c7dc0fa9869d14a1962d797c22",
"assets/FontManifest.json": "18f7331e7e36e5b37a1c4cec98c2801a",
"assets/fonts/MaterialIcons-Regular.otf": "6e5a59d0c37c58223fca39c7d72b0287",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/images/diamondHand.jpg": "62f34436efaa9be90dee897c77215a72",
"assets/images/mainScreen.png": "160e3ae96b13892801b58eab15d0d521",
"assets/images/MK.jpg": "b40684868759f503e237b0e1129dee72",
"assets/images/Venom.jpg": "eff4cf53b2bb64c5386e6e1dc5247446",
"assets/images/Venom2.jpg": "dad2fe8d2218c82c054ee8b041c1bb1d",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ea94427329ef871e960d0f1cdf44683",
"/": "3ea94427329ef871e960d0f1cdf44683",
"main.dart.js": "966ff6505a6d9d74cb49d509546c8861",
"manifest.json": "5735540830c1ccbebc7c5cf18d980ffd",
"version.json": "4934f9d0c6d6e5c4ea9b06deaf8aed63"};
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
