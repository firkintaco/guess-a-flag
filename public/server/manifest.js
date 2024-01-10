const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.8rH6iLN5.js","app":"_app/immutable/entry/app.2Vsho_G6.js","imports":["_app/immutable/entry/start.8rH6iLN5.js","_app/immutable/chunks/entry.1KBMHF-g.js","_app/immutable/chunks/runtime.lX4xhXbU.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.2Vsho_G6.js","_app/immutable/chunks/runtime.lX4xhXbU.js","_app/immutable/chunks/disclose-version.okvWzaCt.js","_app/immutable/chunks/main-client.cKZVkS0P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-0b24f107.js')),
			__memo(() => import('./chunks/1-1a63dc10.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-902a843d.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-4ed993c7.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
