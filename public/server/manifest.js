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
		client: {"start":"_app/immutable/entry/start.yQjqpAb7.js","app":"_app/immutable/entry/app._roBdgWD.js","imports":["_app/immutable/entry/start.yQjqpAb7.js","_app/immutable/chunks/entry.0_R-IXl7.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app._roBdgWD.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/disclose-version.Lxp0NizN.js","_app/immutable/chunks/main-client.ULUgH7-b.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-454a4205.js')),
			__memo(() => import('./chunks/1-1c5f846c.js')),
			__memo(() => import('./chunks/3-c8efdb6e.js')),
			__memo(() => import('./chunks/4-cde8d4f4.js')),
			__memo(() => import('./chunks/5-c8445618.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-ef5df37d.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-3fcbde45.js'))
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
