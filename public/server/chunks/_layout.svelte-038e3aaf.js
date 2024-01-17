import { z as create_anchor, A as slot, B as unsubscribe_stores, j as bind_props, k as pop, C as await_block, D as escape_text, E as store_get, F as escape, G as attr, H as stringify, I as ensure_array_like, g as push } from './index3-759fa29f.js';
import './client-a19d47e8.js';
import { s as score } from './store-1f797452.js';
import { s as session } from './session-04d0bf4b.js';
import { p as page } from './stores-4edad798.js';
import './firebase.app-7fb15254.js';
import './exports-4ef2d035.js';
import './index2-485a21d1.js';
import './main-client-dcc9bbfb.js';

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
  const getContinents = async () => {
    return await fetch("/api/continent").then((response) => response.json());
  };
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_6 = create_anchor($$payload);
  const anchor_11 = create_anchor($$payload);
  const anchor_12 = create_anchor($$payload);
  const anchor_16 = create_anchor($$payload);
  const anchor_17 = create_anchor($$payload);
  $$payload.out += `<header class="shadow px-4 bg-base-100"><div class="navbar"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">${anchor}`;
  NavLink($$payload, { href: "/", text: "Home" });
  $$payload.out += `${anchor} ${anchor_1}`;
  NavLink($$payload, { href: "/scores", text: "Scores" });
  $$payload.out += `${anchor_1} <li><span>Continents</span> <ul class="p-2">${anchor_2}`;
  await_block(
    getContinents(),
    () => {
      $$payload.out += `<li>Loading</li>`;
    },
    (continents) => {
      const anchor_3 = create_anchor($$payload);
      const each_array = ensure_array_like(continents);
      $$payload.out += `${anchor_3}`;
      for (let $$index = 0; $$index < each_array.length; $$index++) {
        const continent = each_array[$$index];
        const anchor_4 = create_anchor($$payload);
        const anchor_5 = create_anchor($$payload);
        $$payload.out += `${anchor_4}${anchor_5}`;
        NavLink($$payload, { href: continent.href, text: continent.name });
        $$payload.out += `${anchor_5}${anchor_4}`;
      }
      $$payload.out += `${anchor_3}`;
    }
  );
  $$payload.out += `${anchor_2}</ul></li> <li><span>${escape_text(store_get($$store_subs, "$session", session)?.user?.displayName ? store_get($$store_subs, "$session", session).user.displayName : "User")}</span> <ul class="p-2">${anchor_6}`;
  if (store_get($$store_subs, "$session", session)?.loggedIn) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_7 = create_anchor($$payload);
    const anchor_8 = create_anchor($$payload);
    $$payload.out += `${anchor_7}`;
    NavLink($$payload, { href: "/profile", text: "Profile" });
    $$payload.out += `${anchor_7} ${anchor_8}`;
    LogOutButton($$payload);
    $$payload.out += `${anchor_8}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_9 = create_anchor($$payload);
    const anchor_10 = create_anchor($$payload);
    $$payload.out += `${anchor_9}`;
    NavLink($$payload, { href: "/auth/login", text: "Login" });
    $$payload.out += `${anchor_9} ${anchor_10}`;
    NavLink($$payload, { href: "/auth/register", text: "Register" });
    $$payload.out += `${anchor_10}`;
  }
  $$payload.out += `${anchor_6}</ul></li></ul></div> <a class="btn btn-ghost text-xl font-logoFont" href="/">Guess-A-Flag</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1">${anchor_11}`;
  NavLink($$payload, { href: "/", text: "Home" });
  $$payload.out += `${anchor_11} <li><details><summary>Continents</summary> <ul class="p-2 z-[1]">${anchor_12}`;
  await_block(
    getContinents(),
    () => {
      $$payload.out += `<li>Loading</li>`;
    },
    (continents) => {
      const anchor_13 = create_anchor($$payload);
      const each_array_1 = ensure_array_like(continents);
      $$payload.out += `${anchor_13}`;
      for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
        const continent = each_array_1[$$index_1];
        const anchor_14 = create_anchor($$payload);
        const anchor_15 = create_anchor($$payload);
        $$payload.out += `${anchor_14}${anchor_15}`;
        NavLink($$payload, { href: continent.href, text: continent.name });
        $$payload.out += `${anchor_15}${anchor_14}`;
      }
      $$payload.out += `${anchor_13}`;
    }
  );
  $$payload.out += `${anchor_12}</ul></details></li> ${anchor_16}`;
  NavLink($$payload, { href: "/scores", text: "Scores" });
  $$payload.out += `${anchor_16} <li><details><summary>${escape_text(store_get($$store_subs, "$session", session)?.user?.displayName ? store_get($$store_subs, "$session", session).user.displayName : "User")}</summary> <ul class="p-2 z-[1]">${anchor_17}`;
  if (store_get($$store_subs, "$session", session)?.loggedIn) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_18 = create_anchor($$payload);
    const anchor_19 = create_anchor($$payload);
    $$payload.out += `${anchor_18}`;
    NavLink($$payload, { href: "/profile", text: "Profile" });
    $$payload.out += `${anchor_18} ${anchor_19}`;
    LogOutButton($$payload);
    $$payload.out += `${anchor_19}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_20 = create_anchor($$payload);
    const anchor_21 = create_anchor($$payload);
    $$payload.out += `${anchor_20}`;
    NavLink($$payload, { href: "/auth/login", text: "Login" });
    $$payload.out += `${anchor_20} ${anchor_21}`;
    NavLink($$payload, { href: "/auth/register", text: "Register" });
    $$payload.out += `${anchor_21}`;
  }
  $$payload.out += `${anchor_17}</ul></details></li></ul></div> <div class="navbar-end"><span class="btn">Score: ${escape(store_get($$store_subs, "$score", score))}</span></div></div></header>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let data = $$props["data"];
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<div class="app bg-gray-200 svelte-85l81p">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-85l81p">${anchor_1}`;
  {
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor_1}</main></div>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-038e3aaf.js.map
