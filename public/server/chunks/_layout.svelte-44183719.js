import { z as create_anchor, A as slot, k as pop, B as escape, C as store_get, D as unsubscribe_stores, g as push } from './index-35d41c90.js';
import './client-a19d47e8.js';
import { s as score } from './store-4509874f.js';
import './exports-4ef2d035.js';
import './index2-485a21d1.js';

function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<header class="shadow p-4"><div class="container mx-auto flex justify-between items-baseline align-baseline"><h1 class="text-2xl">Guess-A-Flag</h1> <div><span class="font-bold text-nowrap">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app svelte-85l81p">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-85l81p">${anchor_1}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_1}</main></div>`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-44183719.js.map
