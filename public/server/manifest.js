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
		client: {"start":"_app/immutable/entry/start.YK6MWNjU.js","app":"_app/immutable/entry/app.ZCBm8gTQ.js","imports":["_app/immutable/entry/start.YK6MWNjU.js","_app/immutable/chunks/entry.47W80qTr.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.ZCBm8gTQ.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/disclose-version.BE1H4JuN.js","_app/immutable/chunks/main-client._B59Dg30.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-45a4bb7f.js')),
			__memo(() => import('./chunks/1-ff046f5a.js')),
			__memo(() => import('./chunks/3-503ebe27.js')),
			__memo(() => import('./chunks/4-a4092558.js')),
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
