import { Q as escape_text, N as store_get, P as unsubscribe_stores, k as pop, g as push } from './exports-28a1050a.js';
import { p as page } from './stores-55071d7f.js';

function Error($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<h1>${escape_text(store_get($$store_subs, "$page", page).status)}</h1> <p>${escape_text(store_get($$store_subs, "$page", page).error?.message)}</p>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-071aedea.js.map
