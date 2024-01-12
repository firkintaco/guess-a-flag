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
		client: {"start":"_app/immutable/entry/start.D2cTnTcS.js","app":"_app/immutable/entry/app._pPnN5i6.js","imports":["_app/immutable/entry/start.D2cTnTcS.js","_app/immutable/chunks/entry.Lz_E_Rl7.js","_app/immutable/chunks/runtime.DkaAAcCG.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app._pPnN5i6.js","_app/immutable/chunks/runtime.DkaAAcCG.js","_app/immutable/chunks/disclose-version.IFR-fyCl.js","_app/immutable/chunks/main-client.jbsLscHY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-8bdef3d2.js')),
			__memo(() => import('./chunks/1-a917cdfb.js'))
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
				endpoint: __memo(() => import('./chunks/_server-e7be9957.js'))
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
