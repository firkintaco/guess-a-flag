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
		client: {"start":"_app/immutable/entry/start.Qna0adyo.js","app":"_app/immutable/entry/app.2c0CrElz.js","imports":["_app/immutable/entry/start.Qna0adyo.js","_app/immutable/chunks/entry.D_G97f_P.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.2c0CrElz.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/disclose-version.lJpY8vyd.js","_app/immutable/chunks/main-client.70HNjuXe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-bc8173ea.js')),
			__memo(() => import('./chunks/1-9ba15154.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-902a843d.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-4ed993c7.js'))
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
