"use strict";var precacheConfig=[["/quick-lipsum/assets/favicon.ico","049ea203537e104bdb4524a2f16ab87c"],["/quick-lipsum/assets/icons/android-icon-192x192.png","eca04a4ed58a4b0c351446bb4ef4ec2f"],["/quick-lipsum/assets/icons/android-icon-512x512.png","0b9e08a2205e84ad1a5c6217d7720729"],["/quick-lipsum/assets/icons/apple-touch-icon.png","2c9ffbc173bac3ea45516a3d552c8c50"],["/quick-lipsum/assets/icons/favicon-16x16.png","caa9aade4344a25ad64ced346777f516"],["/quick-lipsum/assets/icons/favicon-32x32.png","aed2e7b9f441e613b10bf67430e39000"],["/quick-lipsum/assets/icons/mstile-150x150.png","3147d313ebe5c812dd54f85b352b5a53"],["/quick-lipsum/bundle.3013d.js","9390742050c5f169a11609d158d0379f"],["/quick-lipsum/favicon.ico","049ea203537e104bdb4524a2f16ab87c"],["/quick-lipsum/index.html","c47fd3d0011506d359103081acabf9aa"],["/quick-lipsum/manifest.json","75384173b79aa70fc716a25165595020"],["/quick-lipsum/route-home.chunk.34e55.js","81cc52a2b892400d805de3b1939a60eb"],["/quick-lipsum/style.7416b.css","d0e676caa0f32bce185e5e2a1583daa9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});