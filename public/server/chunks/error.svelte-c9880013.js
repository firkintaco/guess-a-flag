import { E as escape_text, C as store_get, D as unsubscribe_stores, k as pop, g as push } from './index-35d41c90.js';
import { g as getContext } from './main-client-7f89e1be.js';
import './client-a19d47e8.js';
import './exports-4ef2d035.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Error$1($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<h1>${escape_text(store_get($$store_subs, "$page", page).status)}</h1> <p>${escape_text(store_get($$store_subs, "$page", page).error?.message)}</p>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-c9880013.js.map
