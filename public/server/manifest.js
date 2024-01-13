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
		client: {"start":"_app/immutable/entry/start.oCT6sf7x.js","app":"_app/immutable/entry/app.-JtEd5Tu.js","imports":["_app/immutable/entry/start.oCT6sf7x.js","_app/immutable/chunks/entry.2W9tkHqU.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.-JtEd5Tu.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/disclose-version.Lxp0NizN.js","_app/immutable/chunks/main-client.ULUgH7-b.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-9fb7a040.js')),
			__memo(() => import('./chunks/1-0c1f53db.js')),
			__memo(() => import('./chunks/3-cd44feff.js')),
			__memo(() => import('./chunks/4-4e60d762.js')),
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
