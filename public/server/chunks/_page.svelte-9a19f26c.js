import { K as onDestroy, z as create_anchor, R as head, E as store_get, B as unsubscribe_stores, j as bind_props, k as pop, D as escape_text, g as push, S as store_set } from './index3-1a6115b8.js';
import { i as isError, s as score, c as countries, a as countryId } from './store-1a6ef7fa.js';
import './Toaster.svelte_svelte_type_style_lang-ce6b4a1b.js';
import './client-a19d47e8.js';
import './utils2-de403b1a.js';
import './index2-8667a1bf.js';
import './exports-4ef2d035.js';

function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let data = $$props["data"];
  onDestroy(() => {
    store_set(score, 0);
    store_set(countries, []);
    store_set(countryId, 0);
  });
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `${escape_text(data.continent)}</title>`;
    $$payload2.out += `<meta name="description" content="Quess-A-Flag">`;
  });
  $$payload.out += `${anchor}`;
  {
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<section class="container mx-auto svelte-12om222">${anchor_1}`;
    if (store_get($$store_subs, "$isError", isError)) {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `<p>Error</p>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      {
        $$payload.out += "<!--ssr:if:true-->";
        $$payload.out += `<h1 class="text-center svelte-12om222">Loading</h1>`;
      }
      $$payload.out += `${anchor_2}`;
    }
    $$payload.out += `${anchor_1}</section>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-9a19f26c.js.map
