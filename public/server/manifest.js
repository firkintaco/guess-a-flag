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
		client: {"start":"_app/immutable/entry/start.qZOWCt6w.js","app":"_app/immutable/entry/app.Fpnp_VCn.js","imports":["_app/immutable/entry/start.qZOWCt6w.js","_app/immutable/chunks/entry.1ZrvYiQz.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/index.6CzcMCQh.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.Fpnp_VCn.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/disclose-version.obGOZsW6.js","_app/immutable/chunks/main-client.HuvZEqFL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-1d7f857c.js')),
			__memo(() => import('./chunks/1-ae89f803.js')),
			__memo(() => import('./chunks/3-01f4242e.js')),
			__memo(() => import('./chunks/4-a8e0d07b.js')),
			__memo(() => import('./chunks/5-083c6b21.js')),
			__memo(() => import('./chunks/6-fc6988b2.js')),
			__memo(() => import('./chunks/7-77207931.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-daf081e2.js'))
			},
			{
				id: "/api/continent",
				pattern: /^\/api\/continent\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-1f051151.js'))
			},
			{
				id: "/api/continent/[continent]",
				pattern: /^\/api\/continent\/([^/]+?)\/?$/,
				params: [{"name":"continent","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-7ac9ef94.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-dc1b2d22.js'))
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
			},
			{
				id: "/scores",
				pattern: /^\/scores\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
