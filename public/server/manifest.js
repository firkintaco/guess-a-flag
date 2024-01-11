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
		client: {"start":"_app/immutable/entry/start.cJ20X7bp.js","app":"_app/immutable/entry/app.EzHZ0pao.js","imports":["_app/immutable/entry/start.cJ20X7bp.js","_app/immutable/chunks/entry.vu0sIiRg.js","_app/immutable/chunks/runtime.W3UjnrTG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.EzHZ0pao.js","_app/immutable/chunks/runtime.W3UjnrTG.js","_app/immutable/chunks/disclose-version.73gxhAIW.js","_app/immutable/chunks/main-client.xzPqCEBL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-3ff2b368.js')),
			__memo(() => import('./chunks/1-a5cdcc8b.js')),
			__memo(() => import('./chunks/3-e6b62a33.js'))
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
			},
			{
				id: "/scores",
				pattern: /^\/scores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
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
