export const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.Y4b9RrTL.js","app":"_app/immutable/entry/app.Vn0XRc4K.js","imports":["_app/immutable/entry/start.Y4b9RrTL.js","_app/immutable/chunks/entry.CMfenkG8.js","_app/immutable/chunks/runtime.TOA9DToB.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.Vn0XRc4K.js","_app/immutable/chunks/runtime.TOA9DToB.js","_app/immutable/chunks/disclose-version.Cmz5mThz.js","_app/immutable/chunks/main-client.i1X26JgJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/_server.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/scores/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
