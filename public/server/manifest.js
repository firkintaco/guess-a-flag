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
		client: {"start":"_app/immutable/entry/start.OGfnWfcu.js","app":"_app/immutable/entry/app.HSt1M7cs.js","imports":["_app/immutable/entry/start.OGfnWfcu.js","_app/immutable/chunks/entry.6EaZ4nds.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/entry/app.HSt1M7cs.js","_app/immutable/chunks/runtime.J5xuhOAO.js","_app/immutable/chunks/disclose-version.lJpY8vyd.js","_app/immutable/chunks/main-client.70HNjuXe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-NdR8FSmF.js')),
			__memo(() => import('./chunks/1-5jY7AlH6.js'))
		],
		routes: [
			{
				id: "/api",
				pattern: /^\/api\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-MbRtTSOz.js'))
			},
			{
				id: "/api/scores",
				pattern: /^\/api\/scores\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => Promise.resolve().then(function () { return _server; }))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

var _server = /*#__PURE__*/Object.freeze({
	__proto__: null
});

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
