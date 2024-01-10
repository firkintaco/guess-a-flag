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
		client: {"start":"_app/immutable/entry/start.N4a5ogTS.js","app":"_app/immutable/entry/app.e-gzpSzB.js","imports":["_app/immutable/entry/start.N4a5ogTS.js","_app/immutable/chunks/entry.EOJQFSgS.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.e-gzpSzB.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/disclose-version.lJpY8vyd.js","_app/immutable/chunks/main-client.70HNjuXe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-6a4df09d.js')),
			__memo(() => import('./chunks/1-e41b3b27.js'))
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
