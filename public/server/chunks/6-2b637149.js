import { r as redirect } from './index-460ecbc6.js';
import { s as session } from './session-6a5d8132.js';
import './index2-8667a1bf.js';
import './utils2-de403b1a.js';

const load = async () => {
  const unsubscribe = session.subscribe((user) => {
    if (!user) {
      throw redirect(302, "/auth/login");
    }
  });
  unsubscribe();
  return {};
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-f496e15e.js')).default;
const universal_id = "src/routes/profile/+page.js";
const imports = ["_app/immutable/nodes/6.ujELXir6.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.NCPXoLXL.js","_app/immutable/chunks/index.CbXXN6g-.js","_app/immutable/chunks/runtime.gTq0fGWg.js","_app/immutable/chunks/disclose-version.WNyamhy6.js","_app/immutable/chunks/firebase.app.XDAO2sjD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-2b637149.js.map
