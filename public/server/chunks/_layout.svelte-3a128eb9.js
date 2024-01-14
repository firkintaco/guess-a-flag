import { z as create_anchor, A as slot, j as bind_props, k as pop, B as escape_text, C as store_get, D as escape, E as unsubscribe_stores, F as attr, G as stringify, g as push } from './index3-b779fbfb.js';
import './client-a19d47e8.js';
import { s as score } from './store-4509874f.js';
import { s as session } from './session-04d0bf4b.js';
import { p as page } from './stores-21427faf.js';
import './firebase.app-1cc0da1c.js';
import './exports-4ef2d035.js';
import './index2-485a21d1.js';
import './main-client-355fd546.js';

function NavLink($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let href = $$props["href"];
  let text = $$props["text"];
  $$payload.out += `<li><button${attr(
    "class",
    `svelte-1uysugx ${stringify([
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
  $$payload.out += `<li><button>Logout</button></li>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function Header($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_7 = create_anchor($$payload);
  const anchor_8 = create_anchor($$payload);
  const anchor_9 = create_anchor($$payload);
  $$payload.out += `<header class="shadow px-4 bg-base-100"><div class="navbar"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">${anchor}`;
  NavLink($$payload, { href: "/", text: "Home" });
  $$payload.out += `${anchor} ${anchor_1}`;
  NavLink($$payload, { href: "/scores", text: "Scores" });
  $$payload.out += `${anchor_1} <li><span>${escape_text(store_get($$store_subs, "$session", session)?.user?.displayName ? store_get($$store_subs, "$session", session).user.displayName : "User")}</span> <ul class="p-2">${anchor_2}`;
  if (store_get($$store_subs, "$session", session)?.loggedIn) {
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
  $$payload.out += `${anchor_2}</ul></li></ul></div> <a class="btn btn-ghost text-xl font-logoFont" href="/">Guess-A-Flag</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1">${anchor_7}`;
  NavLink($$payload, { href: "/", text: "Home" });
  $$payload.out += `${anchor_7} ${anchor_8}`;
  NavLink($$payload, { href: "/scores", text: "Scores" });
  $$payload.out += `${anchor_8} <li><details><summary>${escape_text(store_get($$store_subs, "$session", session)?.user?.displayName ? store_get($$store_subs, "$session", session).user.displayName : "User")}</summary> <ul class="p-2 z-[1]">${anchor_9}`;
  if (store_get($$store_subs, "$session", session)?.loggedIn) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_10 = create_anchor($$payload);
    const anchor_11 = create_anchor($$payload);
    $$payload.out += `${anchor_10}`;
    NavLink($$payload, { href: "/profile", text: "Profile" });
    $$payload.out += `${anchor_10} ${anchor_11}`;
    LogOutButton($$payload);
    $$payload.out += `${anchor_11}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_12 = create_anchor($$payload);
    const anchor_13 = create_anchor($$payload);
    $$payload.out += `${anchor_12}`;
    NavLink($$payload, { href: "/auth/login", text: "Login" });
    $$payload.out += `${anchor_12} ${anchor_13}`;
    NavLink($$payload, { href: "/auth/register", text: "Register" });
    $$payload.out += `${anchor_13}`;
  }
  $$payload.out += `${anchor_9}</ul></details></li></ul></div> <div class="navbar-end"><span class="btn">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  let data = $$props["data"];
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app bg-gray-200 svelte-85l81p">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-85l81p">${anchor_1}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_1}</main></div>`;
  bind_props($$props, { data });
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-3a128eb9.js.map
