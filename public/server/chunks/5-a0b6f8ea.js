import { r as redirect } from './index-460ecbc6.js';
import { s as session } from './session-04d0bf4b.js';
import './index2-485a21d1.js';

const load = async () => {
  const unsubscribe = session.subscribe((user) => {
    if (!user) {
      throw redirect(302, "/auth/login");
    }
    console.log(user);
  });
  unsubscribe();
  return {};
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-896e59eb.js')).default;
const universal_id = "src/routes/profile/+page.js";
const imports = ["_app/immutable/nodes/5.XDgEz9Uj.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.Tg9dBN4O.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/disclose-version.BE1H4JuN.js","_app/immutable/chunks/runtime.psRWym4x.js","_app/immutable/chunks/firebase.app._ydC3NI3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-a0b6f8ea.js.map
