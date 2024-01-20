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
const component = async () => component_cache ??= (await import('./_page.svelte-c097ec94.js')).default;
const universal_id = "src/routes/profile/+page.js";
const imports = ["_app/immutable/nodes/6.9tmFPa1h.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.goP9yUW7.js","_app/immutable/chunks/index.6CzcMCQh.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/disclose-version.obGOZsW6.js","_app/immutable/chunks/firebase.app.bomVEVKu.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-fc6988b2.js.map
