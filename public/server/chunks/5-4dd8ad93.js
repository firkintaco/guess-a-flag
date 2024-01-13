import { r as redirect } from './index2-460ecbc6.js';
import { s as session } from './session-4973a5bf.js';
import './index3-485a21d1.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-8a0f0965.js')).default;
const universal_id = "src/routes/profile/+page.js";
const imports = ["_app/immutable/nodes/5.8EkLlSZ1.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/session.Tg9dBN4O.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/disclose-version.ImRONEDe.js","_app/immutable/chunks/runtime.zQU0RrEG.js","_app/immutable/chunks/firebase.app.hOJf__9E.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-4dd8ad93.js.map
