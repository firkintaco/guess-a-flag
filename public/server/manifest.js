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
		client: {"start":"_app/immutable/entry/start.A0FgDMZD.js","app":"_app/immutable/entry/app.l1HVkHJl.js","imports":["_app/immutable/entry/start.A0FgDMZD.js","_app/immutable/chunks/entry.XCu0P7Sv.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/index.6CzcMCQh.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.l1HVkHJl.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/disclose-version.obGOZsW6.js","_app/immutable/chunks/main-client.HuvZEqFL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-f240b812.js')),
			__memo(() => import('./chunks/1-ae89f803.js')),
			__memo(() => import('./chunks/3-c12d1a5c.js')),
			__memo(() => import('./chunks/4-011ff640.js')),
			__memo(() => import('./chunks/5-73014648.js')),
			__memo(() => import('./chunks/6-2b12ef29.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9f2e9925.js'))
			},
			{
				id: "/api/continent",
				pattern: /^\/api\/continent\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-7f99d2ef.js'))
			},
			{
				id: "/api/continent/[continent]",
				pattern: /^\/api\/continent\/([^/]+?)\/?$/,
				params: [{"name":"continent","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-4bbdc3f4.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5503aefa.js'))
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/auth/register",
				pattern: /^\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/continent/[continent]",
				pattern: /^\/continent\/([^/]+?)\/?$/,
				params: [{"name":"continent","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
