import { o as onAuthStateChanged, a as auth } from './firebase.app-7fb15254.js';

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
const component = async () => component_cache ??= (await import('./_layout.svelte-075d3082.js')).default;
const universal_id = "src/routes/+layout.js";
const imports = ["_app/immutable/nodes/0.VcT16yXT.js","_app/immutable/chunks/firebase.app.XDAO2sjD.js","_app/immutable/chunks/disclose-version.WNyamhy6.js","_app/immutable/chunks/runtime.gTq0fGWg.js","_app/immutable/chunks/main-client.ZZw8-5wp.js","_app/immutable/chunks/store.c34zgRvx.js","_app/immutable/chunks/index.CbXXN6g-.js","_app/immutable/chunks/entry._72Z-Xrk.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.NCPXoLXL.js","_app/immutable/chunks/stores.VELAwreo.js","_app/immutable/chunks/Toaster.svelte_svelte_type_style_lang.0mzTsAEn.js"];
const stylesheets = ["_app/immutable/assets/0.boWoI8mx.css","_app/immutable/assets/Toaster.OqITyIig.css"];
const fonts = ["_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.dOGCK5uJ.woff2","_app/immutable/assets/fira-mono-all-400-normal.dpry7Ug7.woff","_app/immutable/assets/fira-mono-cyrillic-400-normal.N-vuOVMo.woff2","_app/immutable/assets/fira-mono-greek-ext-400-normal.rKiNtwjr.woff2","_app/immutable/assets/fira-mono-greek-400-normal.At854Oju.woff2","_app/immutable/assets/fira-mono-latin-ext-400-normal.-l34kfv6.woff2","_app/immutable/assets/fira-mono-latin-400-normal.yoy1YEIp.woff2"];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-8962da45.js.map
