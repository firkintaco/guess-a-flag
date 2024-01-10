import { k as escape, s as store_get_dev, u as unsubscribe_stores, p as pop, a as push, f as create_anchor, l as slot } from "../../chunks/index.js";
import "../../chunks/client.js";
import { s as score } from "../../chunks/store.js";
import { v as validate_component } from "../../chunks/validate.js";
function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<header class="shadow p-4 svelte-1hy8i7s"><div class="container mx-auto flex justify-between items-baseline align-baseline"><h1 class="text-2xl">Quess-A-Flag</h1> <div><span class="font-bold text-nowrap">Score: ${escape(store_get_dev($$store_subs, "$score", score))}</span></div></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
Header.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app svelte-8o1gnw">${anchor}`;
  validate_component(Header)($$payload, {});
  $$payload.out += `${anchor} <main class="svelte-8o1gnw">${anchor_1}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_1}</main></div>`;
  pop();
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
