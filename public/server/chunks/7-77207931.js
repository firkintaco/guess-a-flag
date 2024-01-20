import { c as collection, d as db, q as query, l as limit, b as orderBy, g as getDocs } from './firebase.app-bfd5c899.js';

const prerender = false;
const getScores = async () => {
  const userCollection = collection(db, "scores");
  const userQuery = query(userCollection, orderBy("score", "desc"), limit(10));
  const userDocs = await getDocs(userQuery);
  const userList = userDocs.docs.map((user) => {
    return {
      ...user.data(),
      id: user.id
    };
  });
  return userList;
};
const load = async () => {
  const scores = await getScores();
  return { scores };
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a8c9d82f.js')).default;
const server_id = "src/routes/scores/+page.server.js";
const imports = ["_app/immutable/nodes/7.Ip3wmK1C.js","_app/immutable/chunks/disclose-version.obGOZsW6.js","_app/immutable/chunks/runtime.QezSLGb2.js","_app/immutable/chunks/each.nEGUvMwz.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-77207931.js.map
