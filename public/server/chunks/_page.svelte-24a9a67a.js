import { R as head, I as attr, D as escape_text, E as store_get, F as escape, B as unsubscribe_stores, k as pop, g as push } from './index3-1a6115b8.js';
import { s as session } from './session-6a5d8132.js';
import './firebase.app-7fb15254.js';
import './utils2-de403b1a.js';
import './index2-8667a1bf.js';

const profilepic = "/_app/immutable/assets/profile.mlltW1Ff.png";
function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Profile Page</title>`;
  });
  $$payload.out += `<section class="container mx-auto max-w-lg bg-white p-6 rounded shadow"><div class="flex flex-col md:flex-row justify-evenly align-center items-center"><img${attr("src", profilepic, false)} alt="profilepic" class="max-w-sm rounded" width="128"> <div class="p-2"><h1>Hello <span class="font-bold text-lg">${escape_text(store_get($$store_subs, "$session", session)?.user?.displayName)}</span>!</h1> <p><span class="font-bold">Name</span>: ${escape(store_get($$store_subs, "$session", session)?.user?.displayName)}</p> <p><span class="font-bold">Email</span>: ${escape(store_get($$store_subs, "$session", session)?.user?.email)}</p></div></div></section>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-24a9a67a.js.map
