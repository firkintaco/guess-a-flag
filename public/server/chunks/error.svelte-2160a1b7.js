import { B as escape_text, C as store_get, E as unsubscribe_stores, k as pop, g as push } from './index3-b779fbfb.js';
import { p as page } from './stores-21427faf.js';
import './main-client-355fd546.js';
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
//# sourceMappingURL=error.svelte-2160a1b7.js.map
