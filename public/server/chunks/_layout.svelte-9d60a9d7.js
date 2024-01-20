import { z as create_anchor, A as slot, B as unsubscribe_stores, j as bind_props, k as pop, C as await_block, D as escape_text, E as store_get, F as escape, G as value_or_fallback, H as ensure_array_like, I as attr, J as stringify, K as onDestroy, L as add_styles, g as push, M as spread_attributes, N as merge_styles, O as spread_props } from './index3-1a6115b8.js';
import { u as useToasterStore, t as toast, p as prefersReducedMotion, s as startPause, e as endPause, a as update } from './Toaster.svelte_svelte_type_style_lang-7f45d3e5.js';
import { s as score } from './store-1a6ef7fa.js';
import { s as session } from './session-6a5d8132.js';
import { g as getContext } from './main-client-0b78d9dd.js';
import './firebase.app-bfd5c899.js';
import './utils2-de403b1a.js';
import './exports-4ef2d035.js';
import './index2-8667a1bf.js';

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
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts, pausedAt } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts, handlers };
}
function CheckmarkIcon($$payload, $$props) {
  push(false);
  let primary = value_or_fallback($$props["primary"], "#61d345");
  let secondary = value_or_fallback($$props["secondary"], "#fff");
  $$payload.out += `<div${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })} class="svelte-11kvm4p"></div>`;
  bind_props($$props, { primary, secondary });
  pop();
}
function ErrorIcon($$payload, $$props) {
  push(false);
  let primary = value_or_fallback($$props["primary"], "#ff4b4b");
  let secondary = value_or_fallback($$props["secondary"], "#fff");
  $$payload.out += `<div${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })} class="svelte-1ee93ns"></div>`;
  bind_props($$props, { primary, secondary });
  pop();
}
function LoaderIcon($$payload, $$props) {
  push(false);
  let primary = value_or_fallback($$props["primary"], "#616161");
  let secondary = value_or_fallback($$props["secondary"], "#e0e0e0");
  $$payload.out += `<div${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })} class="svelte-1j7dflg"></div>`;
  bind_props($$props, { primary, secondary });
  pop();
}
function ToastIcon($$payload, $$props) {
  push(false);
  let type, icon, iconTheme;
  let toast2 = $$props["toast"];
  ({ type, icon, iconTheme } = toast2);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (typeof icon === "string") {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<div class="animated svelte-1kgeier">${escape_text(icon)}</div>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    if (typeof icon !== "undefined") {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      icon?.($$payload, {});
      $$payload.out += `${anchor_2}`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `${anchor_3}`;
      if (type !== "blank") {
        $$payload.out += "<!--ssr:if:true-->";
        const anchor_4 = create_anchor($$payload);
        const anchor_5 = create_anchor($$payload);
        $$payload.out += `<div class="indicator svelte-1kgeier">${anchor_4}`;
        LoaderIcon($$payload, spread_props([iconTheme]));
        $$payload.out += `${anchor_4} ${anchor_5}`;
        if (type !== "loading") {
          $$payload.out += "<!--ssr:if:true-->";
          const anchor_6 = create_anchor($$payload);
          $$payload.out += `<div class="status svelte-1kgeier">${anchor_6}`;
          if (type === "error") {
            $$payload.out += "<!--ssr:if:true-->";
            const anchor_7 = create_anchor($$payload);
            $$payload.out += `${anchor_7}`;
            ErrorIcon($$payload, spread_props([iconTheme]));
            $$payload.out += `${anchor_7}`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_8 = create_anchor($$payload);
            $$payload.out += `${anchor_8}`;
            CheckmarkIcon($$payload, spread_props([iconTheme]));
            $$payload.out += `${anchor_8}`;
          }
          $$payload.out += `${anchor_6}</div>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
        }
        $$payload.out += `${anchor_5}</div>`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
      }
      $$payload.out += `${anchor_3}`;
    }
    $$payload.out += `${anchor_1}`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { toast: toast2 });
  pop();
}
function ToastMessage($$payload, $$props) {
  push(false);
  let toast2 = $$props["toast"];
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes([{ "class": "message" }, toast2.ariaProps], true, false, "svelte-1nauejd")}>${anchor}`;
  if (typeof toast2.message === "string") {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `${escape_text(toast2.message)}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    toast2.message?.($$payload, { toast: toast2 });
    $$payload.out += `${anchor_1}`;
  }
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { toast: toast2 });
  pop();
}
function ToastBar($$payload, $$props) {
  push(false);
  let toast2 = $$props["toast"];
  let position = value_or_fallback($$props["position"], void 0);
  let style = value_or_fallback($$props["style"], "");
  let Component = value_or_fallback($$props["Component"], void 0);
  let factor;
  let animation;
  {
    const top = (toast2.position || position || "top-center").includes("top");
    factor = top ? 1 : -1;
    const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
    animation = toast2.visible ? enter : exit;
  }
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${add_styles(merge_styles(`${stringify(style)}; ${stringify(toast2.style)}`, { "--factor": factor }))}${attr("class", `base ${stringify(toast2.height ? animation : "transparent")} ${stringify(toast2.className || "")} svelte-ug60r4`, false)}>${anchor}`;
  if (Component) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    Component?.($$payload, {
      $$slots: {
        "icon": ($$payload2, $$slotProps) => {
          const anchor_2 = create_anchor($$payload2);
          $$payload2.out += `${anchor_2}`;
          ToastIcon($$payload2, { toast: toast2, slot: "icon" });
          $$payload2.out += `${anchor_2}`;
        },
        "message": ($$payload2, $$slotProps) => {
          const anchor_3 = create_anchor($$payload2);
          $$payload2.out += `${anchor_3}`;
          ToastMessage($$payload2, { toast: toast2, slot: "message" });
          $$payload2.out += `${anchor_3}`;
        }
      }
    });
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `${anchor_4}`;
    slot(
      $$payload,
      $$props.children,
      {
        ToastIcon,
        ToastMessage,
        get toast() {
          return toast2;
        }
      },
      () => {
        const anchor_5 = create_anchor($$payload);
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_5}`;
        ToastIcon($$payload, { toast: toast2 });
        $$payload.out += `${anchor_5} ${anchor_6}`;
        ToastMessage($$payload, { toast: toast2 });
        $$payload.out += `${anchor_6}`;
      }
    );
    $$payload.out += `${anchor_4}`;
  }
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { toast: toast2, position, style, Component });
  pop();
}
function ToastWrapper($$payload, $$props) {
  push(false);
  let top, bottom, factor, justifyContent;
  let toast2 = $$props["toast"];
  let setHeight = $$props["setHeight"];
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${attr(
    "class",
    `wrapper svelte-v01oml ${stringify([
      toast2.visible ? "active" : "",
      !prefersReducedMotion() ? "transition" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}>${anchor}`;
  if (toast2.type === "custom") {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    ToastMessage($$payload, { toast: toast2 });
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get toast() {
          return toast2;
        }
      },
      () => {
        const anchor_3 = create_anchor($$payload);
        $$payload.out += `${anchor_3}`;
        ToastBar($$payload, { toast: toast2, position: toast2.position });
        $$payload.out += `${anchor_3}`;
      }
    );
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { toast: toast2, setHeight });
  pop();
}
function Toaster($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let reverseOrder = value_or_fallback($$props["reverseOrder"], false);
  let position = value_or_fallback($$props["position"], "top-center");
  let toastOptions = value_or_fallback($$props["toastOptions"], void 0);
  let gutter = value_or_fallback($$props["gutter"], 8);
  let containerStyle = value_or_fallback($$props["containerStyle"], void 0);
  let containerClassName = value_or_fallback($$props["containerClassName"], void 0);
  const { toasts, handlers: handlers2 } = useToaster(toastOptions);
  let _toasts;
  _toasts = store_get($$store_subs, "$toasts", toasts).map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, store_get($$store_subs, "$toasts", toasts), {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(_toasts);
  $$payload.out += `<div${attr("class", `toaster ${stringify(containerClassName || "")} svelte-1phplh9`, false)}${attr("style", containerStyle, false)} role="alert">${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const toast2 = each_array[$$index];
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${anchor_2}`;
    ToastWrapper($$payload, {
      toast: toast2,
      setHeight: (height) => handlers2.updateHeight(toast2.id, height)
    });
    $$payload.out += `${anchor_2}${anchor_1}`;
  }
  $$payload.out += `${anchor}</div>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    reverseOrder,
    position,
    toastOptions,
    gutter,
    containerStyle,
    containerClassName
  });
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let data = $$props["data"];
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  $$payload.out += `<div class="app bg-gray-200 svelte-1gpzx3b">${anchor}`;
  Header($$payload);
  $$payload.out += `${anchor} <main class="svelte-1gpzx3b">${anchor_1}`;
  {
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor_1}</main></div> ${anchor_3}`;
  Toaster($$payload, {});
  $$payload.out += `${anchor_3}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-9d60a9d7.js.map
