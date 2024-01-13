import { z as create_anchor, A as slot, k as pop, B as store_get, C as escape, D as unsubscribe_stores, E as attr, F as stringify, G as escape_text, j as bind_props, g as push } from './index-7e7086d2.js';
import './client-a19d47e8.js';
import { s as score } from './store-3107f474.js';
import { s as session } from './session-4973a5bf.js';
import { p as page } from './stores-0ff70d65.js';
import './firebase.app-09dc1e45.js';
import './exports-4ef2d035.js';
import './index3-485a21d1.js';
import './main-client-cdd2bcb7.js';

function NavLink($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let href = $$props["href"];
  let text = $$props["text"];
  $$payload.out += `<li class="mr-3"><button${attr(
    "class",
    `normal-link svelte-1moubbz ${stringify([
      store_get($$store_subs, "$page", page).url.pathname == href ? "active" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>${escape_text(text)}</button></li>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { href, text });
  pop();
}
function LogOutButton($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  $$payload.out += `<li class="mr-3"><button class="normal-link svelte-1moubbz">Logout</button></li>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  $$payload.out += `<header class="shadow px-4 bg-[#FBFBFB]"><nav class="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref=""><div class="flex w-full flex-wrap items-center justify-between px-3"><div class="ml-2"><a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">Guess-A-Flag</a></div> <ul class="flex">${anchor}`;
  NavLink($$payload, { href: "/", text: "Home" });
  $$payload.out += `${anchor} ${anchor_1}`;
  NavLink($$payload, { href: "/scores", text: "Scores" });
  $$payload.out += `${anchor_1} ${anchor_2}`;
  if (store_get($$store_subs, "$session", session)) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_3 = create_anchor($$payload);
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `${anchor_3}`;
    NavLink($$payload, { href: "/profile", text: "Profile" });
    $$payload.out += `${anchor_3} ${anchor_4}`;
    LogOutButton($$payload);
    $$payload.out += `${anchor_4}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_5 = create_anchor($$payload);
    const anchor_6 = create_anchor($$payload);
    $$payload.out += `${anchor_5}`;
    NavLink($$payload, { href: "/auth/login", text: "Login" });
    $$payload.out += `${anchor_5} ${anchor_6}`;
    NavLink($$payload, { href: "/auth/register", text: "Register" });
    $$payload.out += `${anchor_6}`;
  }
  $$payload.out += `${anchor_2}</ul> <span class="font-bold ml-2 text-neutral-500 dark:text-neutral-200">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></nav></header>`;
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
//# sourceMappingURL=_layout.svelte-232c1b71.js.map
