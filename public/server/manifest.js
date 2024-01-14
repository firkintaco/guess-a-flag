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
		client: {"start":"_app/immutable/entry/start.sPm8o9q5.js","app":"_app/immutable/entry/app.aytBSVJ4.js","imports":["_app/immutable/entry/start.sPm8o9q5.js","_app/immutable/chunks/entry.v8TcVHZA.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.aytBSVJ4.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/disclose-version.BE1H4JuN.js","_app/immutable/chunks/main-client._B59Dg30.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-9c270126.js')),
			__memo(() => import('./chunks/1-c82badd0.js')),
			__memo(() => import('./chunks/3-9f432534.js')),
			__memo(() => import('./chunks/4-d8db246b.js')),
			__memo(() => import('./chunks/5-a0b6f8ea.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f217468f.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-4ed1d833.js'))
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
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
