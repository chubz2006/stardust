// Lets phones install the site as an app. It does not cache anything: the game is always loaded fresh.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
