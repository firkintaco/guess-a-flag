import { o as onAuthStateChanged, a as auth } from './firebase.app-1cc0da1c.js';

const load = async ({ url }) => {
  const getAuthUser = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user ? user : false));
    });
  };
  return {
    getAuthUser,
    url: url.pathname
  };
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-0a49f46c.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.--EoJwNZ.js","_app/immutable/chunks/firebase.app._ydC3NI3.js","_app/immutable/chunks/disclose-version.BE1H4JuN.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/main-client._B59Dg30.js","_app/immutable/chunks/entry.T0xvDnYS.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/store.xwJxxw6r.js","_app/immutable/chunks/session.Tg9dBN4O.js","_app/immutable/chunks/stores.MuHv-9SQ.js"];
const stylesheets = ["_app/immutable/assets/0.lT__kFeb.css"];
const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.dOGCK5uJ.woff2","_app/immutable/assets/fira-mono-all-400-normal.dpry7Ug7.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.N-vuOVMo.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.rKiNtwjr.woff2","_app/immutable/assets/fira-mono-greek-400-normal.At854Oju.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.-l34kfv6.woff2","_app/immutable/assets/fira-mono-latin-400-normal.yoy1YEIp.woff2"];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-31cb908f.js.map
