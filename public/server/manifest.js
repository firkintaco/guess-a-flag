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
		client: {"start":"_app/immutable/entry/start.0J_jjIu0.js","app":"_app/immutable/entry/app.PHpsX-IO.js","imports":["_app/immutable/entry/start.0J_jjIu0.js","_app/immutable/chunks/entry.L8c4YHrr.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/entry/app.PHpsX-IO.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/disclose-version.ImRONEDe.js","_app/immutable/chunks/main-client.ULUgH7-b.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-4af6f059.js')),
			__memo(() => import('./chunks/1-47de1202.js')),
			__memo(() => import('./chunks/3-875cb21f.js')),
			__memo(() => import('./chunks/4-d8cdde89.js')),
			__memo(() => import('./chunks/5-4dd8ad93.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e4ebed3a.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e7be9957.js'))
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
