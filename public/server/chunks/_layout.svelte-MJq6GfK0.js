import { c as create_anchor, b as slot, p as pop, d as escape, s as store_get, u as unsubscribe_stores, a as push } from './exports-rViBbGp2.js';
import './client-ngFn0ex1.js';
import { w as writable } from './index2-gv6Eudt_.js';
import { persistentAtom } from '@nanostores/persistent';

const score = writable(0);
persistentAtom("user_uuid", crypto.randomUUID().toString());

function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<header class="shadow p-4 svelte-1hy8i7s"><div class="container mx-auto flex justify-between items-baseline align-baseline"><h1 class="text-2xl">Quess-A-Flag</h1> <div><span class="font-bold text-nowrap">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app svelte-8o1gnw">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-8o1gnw">${anchor_1}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_1}</main></div>`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-MJq6GfK0.js.map
