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
		client: {"start":"_app/immutable/entry/start.m_WIuSXU.js","app":"_app/immutable/entry/app.ruqVbL5K.js","imports":["_app/immutable/entry/start.m_WIuSXU.js","_app/immutable/chunks/entry.2BbAjoaL.js","_app/immutable/chunks/runtime.DkaAAcCG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.ruqVbL5K.js","_app/immutable/chunks/runtime.DkaAAcCG.js","_app/immutable/chunks/disclose-version.IFR-fyCl.js","_app/immutable/chunks/main-client.jbsLscHY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-898b455e.js')),
			__memo(() => import('./chunks/1-ff77f228.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-59bdb3c6.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5f7377c3.js'))
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
