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
		client: {"start":"_app/immutable/entry/start.Hkbokf1e.js","app":"_app/immutable/entry/app.DxQs-qRU.js","imports":["_app/immutable/entry/start.Hkbokf1e.js","_app/immutable/chunks/entry.b7wfs64H.js","_app/immutable/chunks/runtime.Z3s11QRo.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.DxQs-qRU.js","_app/immutable/chunks/runtime.Z3s11QRo.js","_app/immutable/chunks/disclose-version.gLDZU4pp.js","_app/immutable/chunks/main-client.Sh0UTU4W.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-becdc89b.js')),
			__memo(() => import('./chunks/1-dd395030.js')),
			__memo(() => import('./chunks/3-46cc53e9.js')),
			__memo(() => import('./chunks/4-e3f4e973.js')),
			__memo(() => import('./chunks/5-d64eafbf.js')),
			__memo(() => import('./chunks/6-afa3c078.js'))
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
