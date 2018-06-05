
/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// configuration
// FUTURE DEV: Edit this when there are file changes (the version # to force clear + update the cache)
var version = '1.0.0';
var cacheName = 'cache-' + version;
var cachedResources = [
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js',
  'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
  'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
  'http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js',
  'http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
  'https://cdn.snipcart.com/themes/2.0/base/fonts/snipcart/Snipcart.woff?94043836',
  'https://app.snipcart.com/api/sessions',
  '/fonts/CircularStd-Black.svg',
  '/fonts/CircularStd-BlackItalic.svg',
  '/fonts/CircularStd-Bold.svg',
  '/fonts/CircularStd-BoldItalic.svg',
  '/fonts/CircularStd-Book.svg',
  '/fonts/CircularStd-BookItalic.svg',
  '/fonts/CircularStd-Medium.svg',
  '/fonts/CircularStd-MediumItalic.svg',
  '/fonts/CircularStd-Black.ttf',
  '/fonts/CircularStd-BlackItalic.ttf',
  '/fonts/CircularStd-Bold.ttf',
  '/fonts/CircularStd-BoldItalic.ttf',
  '/fonts/CircularStd-Book.ttf',
  '/fonts/CircularStd-BookItalic.ttf',
  '/fonts/CircularStd-Medium.ttf',
  '/fonts/CircularStd-MediumItalic.ttf',
  '/fonts/CircularStd-Black.otf',
  '/fonts/CircularStd-BlackItalic.otf',
  '/fonts/CircularStd-Bold.otf',
  '/fonts/CircularStd-BoldItalic.otf',
  '/fonts/CircularStd-Book.otf',
  '/fonts/CircularStd-BookItalic.otf',
  '/fonts/CircularStd-Medium.otf',
  '/fonts/CircularStd-MediumItalic.otf',
  '/fonts/CircularStd-Black.eot',
  '/fonts/CircularStd-BlackItalic.eot',
  '/fonts/CircularStd-Bold.eot',
  '/fonts/CircularStd-BoldItalic.eot',
  '/fonts/CircularStd-Book.eot',
  '/fonts/CircularStd-BookItalic.eot',
  '/fonts/CircularStd-Medium.eot',
  '/fonts/CircularStd-MediumItalic.eot',
  '/fonts/CircularStd-Black.woff',
  '/fonts/CircularStd-BlackItalic.woff',
  '/fonts/CircularStd-Bold.woff',
  '/fonts/CircularStd-BoldItalic.woff',
  '/fonts/CircularStd-Book.woff',
  '/fonts/CircularStd-BookItalic.woff',
  '/fonts/CircularStd-Medium.woff',
  '/fonts/CircularStd-MediumItalic.woff',
  '/fonts/CircularStd-Black.woff2',
  '/fonts/CircularStd-BlackItalic.woff2',
  '/fonts/CircularStd-Bold.woff2',
  '/fonts/CircularStd-BoldItalic.woff2',
  '/fonts/CircularStd-Book.woff2',
  '/fonts/CircularStd-BookItalic.woff2',
  '/fonts/CircularStd-Medium.woff2',
  '/fonts/CircularStd-MediumItalic.woff2',
  '/css/prod/app.min.css',
  '/js/prod/app.min.js',
  '/js/vendor/console-shim.js',
  '/images/common/contactIconsWhite.jpg',
  '/images/common/logo_blue_text.png',
  '/images/common/logo_main.png',
  '/images/common/logo_main.png',
  '/images/common/Ollie_Trans.png',
  '/images/common/OlliePattern.png',
  '/images/common/patternBG.jpg',
  '/images/common/rightIcons1.png',
  '/images/common/rightIcons2.png',
  '/images/common/rightIconsContact.png',
  '/images/common/quote.svg',
  '/images/common/nav_cart.svg',
  '/images/common/nav_email.svg',
  '/images/common/nav_phone.svg',
  '/images/common/social/fb.png',
  '/images/common/social/ig.png',
  '/images/common/social/tw.png',
  '/images/home/landingBG.png',
  '/images/home/lgImage1.png',
  '/images/home/lgImage1_mob.png',
  '/images/home/lgImage2.png',
  '/images/home/lgImage2_mob.png',
  '/images/home/landingBG.png',
  '/images/home/Ollie.png',
  '/images/home/Ollie_Text_Circular.png',
  '/images/products/banner.png',
  '/images/products/birthdayparties.png',
  '/images/products/CorporatePartnership.jpg',
  '/images/products/CurriculumUnits.jpg',
  '/images/products/EarlyChildhood.jpg',
  '/images/products/handsonactivitybooks.png',
  '/images/products/HomeSchooling.png',
  '/images/products/icons.png',
  '/images/products/InSchoolFieldTrip.png',
  '/images/products/InternationalLicenseeProgram.jpg',
  '/images/products/learnathomekits.png',
  '/images/products/OllieListStyle.png',
  '/images/products/ProfessionalDevelopment.jpg',
  '/images/products/scienceexperimentbags.png',
  '/images/products/ScienceSupplies.jpg',
  '/images/products/CurriculumUnits/sample.png',
  '/images/products/CurriculumUnits/1.png',
  '/images/products/CurriculumUnits/2.png',
  '/images/products/EarlyChildhood/1.png',
  '/images/products/EarlyChildhood/2.png',
  '/images/products/EarlyChildhood/3.png',
  '/images/products/HandsOnActivityBooks/ChangingSeasons.jpg',
  '/images/products/HandsOnActivityBooks/LightAndColor.jpg',
  '/images/products/HandsOnActivityBooks/MixingAndChemistry.jpg',
  '/images/products/HandsOnActivityBooks/WaterAndBubbles.jpg',
  '/images/products/HandsOnActivityBooks/WayThingsMove.jpg',
  '/images/products/InternationalLicenseeProgram/1.png',
  '/images/products/InternationalLicenseeProgram/2.png',
  '/images/products/InternationalLicenseeProgram/3.png',
  '/images/products/LearnAtHomeKits/Goop.jpg',
  '/images/products/LearnAtHomeKits/Kaleidoscope.jpg',
  '/images/products/LearnAtHomeKits/Magnet.jpg',
  '/images/products/LearnAtHomeKits/RockCollection.jpg',
  '/images/products/LearnAtHomeKits/ShellCollection.jpg',
  '/images/products/LearnAtHomeKits/Volcano.jpg',
  '/images/products/ProfessionalDevelopment/1.png',
  '/images/products/ProfessionalDevelopment/2.png',
  '/images/products/ProfessionalDevelopment/3.png',
  '/images/products/ScienceSupplies/1.png',
  '/images/products/ScienceSupplies/2.png',
  '/images/products/ScienceSupplies/successStories/cmt.png',
  '/images/products/ScienceSupplies/successStories/georgia.png',
  '/images/products/ScienceSupplies/successStories/headStart.png',
  '/images/products/ScienceSupplies/successStories/nhps.png',
  '/images/products/ScienceSupplies/successStories/rps.png',
  '/images/products/successStories/cmt.png',
  '/images/products/successStories/georgia.png',
  '/images/products/successStories/headStart.png',
  '/images/products/successStories/nhps.png',
  '/images/products/successStories/rps.png',
  '/images/sharing/meta_image.png'
];
var expectedCaches = [
  cacheName
];

if (!Cache.prototype.addAll) {
	// cache.addAll polyfill https://github.com/coonsta/cache-polyfill
	Cache.prototype.addAll = function addAll(requests) {
		var cache = this;

		// Since DOMExceptions are not constructable:
		function NetworkError(message) {
			this.name = 'NetworkError';
			this.code = 19;
			this.message = message;
		}

		NetworkError.prototype = Object.create(Error.prototype);

		return Promise.resolve().then(function () {
			if (arguments.length < 1) throw new TypeError();

			// Simulate sequence<(Request or USVString)> binding:
			var sequence = [];

			requests = requests.map(function (request) {
				if (request instanceof Request) {
					return request;
				}
				else {
					return String(request); // may throw TypeError
				}
			});

			return Promise.all(
				requests.map(function (request) {
					if (typeof request === 'string') {
						request = new Request(request);
					}

					var scheme = new URL(request.url).protocol;

					if (scheme !== 'http:' && scheme !== 'https:') {
						throw new NetworkError("Invalid scheme");
					}

					return fetch(request.clone());
				})
			);
		}).then(function (responses) {
			// TODO: check that requests don't overwrite one another
			// (don't think this is possible to polyfill due to opaque responses)
			return Promise.all(
				responses.map(function (response, i) {
					return cache.put(requests[i], response);
				})
			);
		}).then(function () {
			return undefined;
		});
	};
}

// installs the service worker, setting up caches
self.oninstall = function(event) {
	console.log('installing');

	// skip the waiting state and immediately activate even while service worker clients are using the registration
	// to ensure that updates to the underlying service worker take effect immediately for both the current client and
	// all other active clients
	self.skipWaiting();

	// install completes when we open the cache and cache all the requested resources
	event.waitUntil(
		caches.open(cacheName)
			.then(function(cache) {
				console.log('caching resources', cachedResources);

				return cache.addAll(cachedResources);
			}).then(function() {
				console.log('install complete');
			}).catch(function() {
				console.warn('install failed');
			})
	);
};

// called on activation, removes un-needed caches
self.onactivate = function(event) {
	console.log('activate');

	// set itself as the active worker for a client page when the worker and the page are in the same scope
	if (self.clients && clients.claim) {
		clients.claim();
	}

	// list available caches and remove ones we don't use
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			console.log('available caches', cacheNames);

			// remove caches not in the expected caches list
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (expectedCaches.indexOf(cacheName) == -1) {
						console.log('delete cache', cacheName);

						return caches.delete(cacheName);
					}
				})
			);
		})
	);
};

// intercepts fetch requests, possibly responding with cached data
self.onfetch = function (event) {
	// the request url could be used to pass some resources through without matching cache
	var requestURL = new URL(event.request.url);

	// try to match request to cache
	event.respondWith(
		caches.match(event.request, {
			ignoreVary: true
		}).then(function(response) {
			// we have a cache hit, return it
			if (response) {
				console.log('cache hit', requestURL.href);
				return response;
			}

			console.log('cache miss', requestURL.href);

			// didn't find it in the cache, pass request to fetch to try to load it from the internet
			return fetch(event.request);
		})
	);
};
