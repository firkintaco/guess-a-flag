import { r as redirect } from './index-460ecbc6.js';
import { s as session } from './session-04d0bf4b.js';
import './index2-485a21d1.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-eef9cd3f.js')).default;
const universal_id = "src/routes/profile/+page.js";
const imports = ["_app/immutable/nodes/6.WEuepdQn.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.Tg9dBN4O.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/disclose-version.gLDZU4pp.js","_app/immutable/chunks/runtime.Z3s11QRo.js","_app/immutable/chunks/firebase.app.XDAO2sjD.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-afa3c078.js.map
