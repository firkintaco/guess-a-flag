import { z as create_anchor, E as attr, D as unsubscribe_stores, k as pop, g as push } from './index-7e7086d2.js';
import './client-a19d47e8.js';
import './firebase.app-09dc1e45.js';
import './exports-4ef2d035.js';

function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let email;
  let password;
  const anchor = create_anchor($$payload);
  $$payload.out += `<form class="bg-blue-500 text-center w-1/3 sm:w-full px-3 py-4 text-black mx-auto rounded"><input type="email" placeholder="Email" class="block w-full mx-auto text-sm py-2 px-3 rounded" required${attr("value", email, false)}> <input type="password" placeholder="Password" class="block w-full mx-auto text-sm py-2 px-3 rounded my-3" required${attr("value", password, false)}> <button type="submit" class="bg-blue text-white font-bold py-2 px-4 rounded border block mx-auto w-full">Register</button> ${anchor}`;
  {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor}</form>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-42ea77d8.js.map
