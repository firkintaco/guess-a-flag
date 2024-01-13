import { G as escape_text, B as store_get, D as unsubscribe_stores, k as pop, g as push } from './index-7e7086d2.js';
import { p as page } from './stores-0ff70d65.js';
import './main-client-cdd2bcb7.js';
import './client-a19d47e8.js';
import './exports-4ef2d035.js';

function Error($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<h1>${escape_text(store_get($$store_subs, "$page", page).status)}</h1> <p>${escape_text(store_get($$store_subs, "$page", page).error?.message)}</p>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-8ec9c4d6.js.map
