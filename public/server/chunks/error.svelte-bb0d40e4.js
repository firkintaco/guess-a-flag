import { G as escape_text, D as store_get, F as unsubscribe_stores, k as pop, g as push } from './index-d63fb175.js';
import { p as page } from './stores-16a84145.js';
import './main-client-245ba249.js';
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
//# sourceMappingURL=error.svelte-bb0d40e4.js.map
