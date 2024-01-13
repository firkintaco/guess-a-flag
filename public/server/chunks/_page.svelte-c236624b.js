import { z as create_anchor, B as attr, F as unsubscribe_stores, k as pop, g as push } from './index-d63fb175.js';
import './client-a19d47e8.js';
import './firebase.app-ef5f3899.js';
import './exports-4ef2d035.js';

function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let email;
  let password;
  const anchor = create_anchor($$payload);
  $$payload.out += `<form class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12">${anchor}`;
  {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor} <input type="email" placeholder="Email" class="px-4 py-2 border border-gray-300 rounded-md" required${attr("value", email, false)}> <input type="password" placeholder="Password" class="px-4 py-2 border border-gray-300 rounded-md" required${attr("value", password, false)}> <button type="submit" class="default-action">Register</button></form>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-c236624b.js.map
