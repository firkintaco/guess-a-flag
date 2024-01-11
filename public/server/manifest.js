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
		client: {"start":"_app/immutable/entry/start.-swoa4II.js","app":"_app/immutable/entry/app.__jnQdn-.js","imports":["_app/immutable/entry/start.-swoa4II.js","_app/immutable/chunks/entry.9NpE0PTR.js","_app/immutable/chunks/runtime.A3zHqo8R.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.__jnQdn-.js","_app/immutable/chunks/runtime.A3zHqo8R.js","_app/immutable/chunks/disclose-version.50QhH8_L.js","_app/immutable/chunks/main-client.mcESlmFZ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-cf283d4a.js')),
			__memo(() => import('./chunks/1-ffb4f1d1.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-59bdb3c6.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-11a54a52.js'))
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
