/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6b4ce84ad7a11df88f7f.js"
  },
  {
    "url": "styles.e3ca7fb2adcef8ecde0f.css"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js"
  },
  {
    "url": "framework-1a1efb3f5c798a012f4a.js"
  },
  {
    "url": "app-d96f39924790f213957c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "388ad93e441efc99961ef4691c9c1e11"
  },
  {
    "url": "google-fonts/s/reemkufi/v7/2sDcZGJLip7W2J7v7wQzaGW5.woff2",
    "revision": "983778912ae31484a6e9ea6f36cae1b9"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4.woff2",
    "revision": "56ecfc67855e255d92db6f6fcb97143e"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxK.woff2",
    "revision": "c5bf51b68dc9fd7fe944d8947fe12518"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c9875e2473a7c518755f.js"
  },
  {
    "url": "polyfill-98c1c53b2c5b5eb2390e.js"
  },
  {
    "url": "f0e45107-5dcaedf55b8bf28efe29.js"
  },
  {
    "url": "f7f859cd4bf156c2acc6f46f65ba39cb35d4c0a9-de0826d375bb6da471a5.js"
  },
  {
    "url": "component---node-modules-narative-gatsby-theme-novela-src-templates-article-template-tsx-7791b2df3f03b38d8416.js"
  },
  {
    "url": "page-data/blog/how-to-backup-and-restore-your-pgp-keys-with-gpg/page-data.json",
    "revision": "08945defff6f4eaf60c6ddaa929dfb36"
  },
  {
    "url": "page-data/sq/d/1143375668.json",
    "revision": "4e6a8bb58622d0edc7c0b8a00148d9d8"
  },
  {
    "url": "page-data/sq/d/1491088328.json",
    "revision": "c9dfe0db6af1f9742ea19b58c4e95026"
  },
  {
    "url": "page-data/sq/d/1921650733.json",
    "revision": "e9a4c6278eab98548abfeae487a36bb7"
  },
  {
    "url": "page-data/sq/d/2068910035.json",
    "revision": "284393de932161ccb01e83531736713d"
  },
  {
    "url": "page-data/sq/d/2444214635.json",
    "revision": "c59f24a85fe6b20ec3160d47ca668cae"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "90994d5dc819fd2edba2b63d0c989b91"
  },
  {
    "url": "5adfd937054d18aa90c3653907d1d43da6549296-4a3a3b2f5bdc7d872089.js"
  },
  {
    "url": "component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-9f6a94b60ca18519d1ad.js"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "863b5a19e7c9cd094f5dcc6aa3e9a2cf"
  },
  {
    "url": "page-data/sq/d/3372861117.json",
    "revision": "51f1c3fe6ce9247a21535778b1d90109"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f5d721e9793a71b666dad4d4fd347c22"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-d96f39924790f213957c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
