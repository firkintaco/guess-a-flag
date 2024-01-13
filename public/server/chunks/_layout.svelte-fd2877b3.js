import { z as create_anchor, A as slot, k as pop, B as attr, C as stringify, D as store_get, E as escape, F as unsubscribe_stores, g as push } from './index-d63fb175.js';
import { p as page } from './stores-16a84145.js';
import { s as score } from './store-3107f474.js';
import './firebase.app-ef5f3899.js';
import { s as session } from './session-4973a5bf.js';
import './main-client-245ba249.js';
import './client-a19d47e8.js';
import './exports-4ef2d035.js';
import './index3-485a21d1.js';

function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const anchor = create_anchor($$payload);
  $$payload.out += `<header class="shadow px-4 bg-[#FBFBFB]"><nav class="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref=""><div class="flex w-full flex-wrap items-center justify-between px-3"><div class="ml-2"><a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">Guess-A-Flag</a></div> <ul class="flex"><li class="mr-3"><a${attr(
    "class",
    `normal-link svelte-1moubbz ${stringify([
      store_get($$store_subs, "$page", page).url.pathname == "/" ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )} href="/">Home</a></li> <li class="mr-3"><a${attr(
    "class",
    `normal-link svelte-1moubbz ${stringify([
      store_get($$store_subs, "$page", page).url.pathname.includes("/scores") ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )} href="/scores">Scores</a></li> ${anchor}`;
  if (store_get($$store_subs, "$session", session)) {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<li class="mr-3"><a${attr(
      "class",
      `normal-link svelte-1moubbz ${stringify([
        store_get($$store_subs, "$page", page).url.pathname.includes("/profile") ? "active" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )} href="/profile">Profile</a></li> <li><button class="normal-link svelte-1moubbz">Logout</button></li>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    $$payload.out += `<li><a${attr(
      "class",
      `normal-link svelte-1moubbz ${stringify([
        store_get($$store_subs, "$page", page).url.pathname.includes("/auth/login") ? "active" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )} href="/auth/login">Log In</a></li> <li><a${attr(
      "class",
      `normal-link svelte-1moubbz ${stringify([
        store_get($$store_subs, "$page", page).url.pathname.includes("/auth/register") ? "active" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )} href="/auth/register">Register</a></li>`;
  }
  $$payload.out += `${anchor}</ul> <span class="font-bold ml-2 text-neutral-500 dark:text-neutral-200">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></nav></header>`;
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
//# sourceMappingURL=_layout.svelte-fd2877b3.js.map
