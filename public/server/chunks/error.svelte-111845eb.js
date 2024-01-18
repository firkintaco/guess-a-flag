import { D as escape_text, E as store_get, B as unsubscribe_stores, k as pop, g as push } from './index3-1a6115b8.js';
import { p as page } from './stores-8fd3a671.js';
import './utils2-de403b1a.js';
import './main-client-0b78d9dd.js';
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
//# sourceMappingURL=error.svelte-111845eb.js.map
