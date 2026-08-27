/// <reference lib="webworker" />

/** @type {ServiceWorkerGlobalScope} */
const service_worker = self;

service_worker.addEventListener('install', function () {
	void service_worker.skipWaiting();
});

service_worker.addEventListener('activate', function () {
	void service_worker.registration
		.unregister()
		.then(function () {
			return service_worker.clients.matchAll();
		})
		.then(function (clients) {
			clients.forEach((client) => client.navigate(client.url));
		});
});
