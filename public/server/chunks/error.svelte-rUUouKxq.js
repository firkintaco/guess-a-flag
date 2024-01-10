import { e as escape_text, s as store_get, u as unsubscribe_stores, p as pop, a as push } from './exports-rViBbGp2.js';
import { g as getContext } from './main-client-Zu-hJ924.js';
import './client-ngFn0ex1.js';

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
//# sourceMappingURL=error.svelte-rUUouKxq.js.map
