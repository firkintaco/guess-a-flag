import { z as create_anchor, A as slot, j as bind_props, k as pop, B as escape_text, C as store_get, D as escape, E as unsubscribe_stores, F as attr, G as stringify, g as push } from './index3-b779fbfb.js';
import './client-a19d47e8.js';
import { w as writable } from './index2-485a21d1.js';
import { s as session } from './session-04d0bf4b.js';
import { p as page } from './stores-21427faf.js';
import './firebase.app-1cc0da1c.js';
import './exports-4ef2d035.js';
import './main-client-355fd546.js';

let clean = Symbol('clean');

let listenerQueue = [];

let atom = (initialValue, level) => {
  let listeners = [];
  let $atom = {
    get() {
      if (!$atom.lc) {
        $atom.listen(() => {})();
      }
      return $atom.value
    },
    l: level || 0,
    lc: 0,
    listen(listener, listenerLevel) {
      $atom.lc = listeners.push(listener, listenerLevel || $atom.l) / 2;

      return () => {
        let index = listeners.indexOf(listener);
        if (~index) {
          listeners.splice(index, 2);
          if (!--$atom.lc) $atom.off();
        }
      }
    },
    notify(changedKey) {
      let runListenerQueue = !listenerQueue.length;
      for (let i = 0; i < listeners.length; i += 2) {
        listenerQueue.push(
          listeners[i],
          listeners[i + 1],
          $atom.value,
          changedKey,
        );
      }

      if (runListenerQueue) {
        for (let i = 0; i < listenerQueue.length; i += 4) {
          let skip;
          for (let j = i + 1; !skip && (j += 4) < listenerQueue.length;) {
            if (listenerQueue[j] < listenerQueue[i + 1]) {
              skip = listenerQueue.push(
               listenerQueue[i],
               listenerQueue[i + 1],
               listenerQueue[i + 2],
               listenerQueue[i + 3]
             );
            }
          }

          if (!skip) {
            listenerQueue[i](listenerQueue[i + 2], listenerQueue[i + 3]);
          }
        }
        listenerQueue.length = 0;
      }
    },
    off() {}, /* It will be called on last listener unsubscribing.
                 We will redefine it in onMount and onStop. */
    set(data) {
      if ($atom.value !== data) {
        $atom.value = data;
        $atom.notify();
      }
    },
    subscribe(listener, listenerLevel) {
      let unbind = $atom.listen(listener, listenerLevel);
      listener($atom.value);
      return unbind
    },
    value: initialValue
  };

  if (process.env.NODE_ENV !== 'production') {
    $atom[clean] = () => {
      listeners = [];
      $atom.lc = 0;
      $atom.off();
    };
  }

  return $atom
};

const MOUNT = 5;
const UNMOUNT = 6;
const REVERT_MUTATION = 10;

let on = (object, listener, eventKey, mutateStore) => {
  object.events = object.events || {};
  if (!object.events[eventKey + REVERT_MUTATION]) {
    object.events[eventKey + REVERT_MUTATION] = mutateStore(eventProps => {
      // eslint-disable-next-line no-sequences
      object.events[eventKey].reduceRight((event, l) => (l(event), event), {
        shared: {},
        ...eventProps
      });
    });
  }
  object.events[eventKey] = object.events[eventKey] || [];
  object.events[eventKey].push(listener);
  return () => {
    let currentListeners = object.events[eventKey];
    let index = currentListeners.indexOf(listener);
    currentListeners.splice(index, 1);
    if (!currentListeners.length) {
      delete object.events[eventKey];
      object.events[eventKey + REVERT_MUTATION]();
      delete object.events[eventKey + REVERT_MUTATION];
    }
  }
};

let STORE_UNMOUNT_DELAY = 1000;

let onMount = ($store, initialize) => {
  let listener = payload => {
    let destroy = initialize(payload);
    if (destroy) $store.events[UNMOUNT].push(destroy);
  };
  return on($store, listener, MOUNT, runListeners => {
    let originListen = $store.listen;
    $store.listen = (...args) => {
      if (!$store.lc && !$store.active) {
        $store.active = true;
        runListeners();
      }
      return originListen(...args)
    };

    let originOff = $store.off;
    $store.events[UNMOUNT] = [];
    $store.off = () => {
      originOff();
      setTimeout(() => {
        if ($store.active && !$store.lc) {
          $store.active = false;
          for (let destroy of $store.events[UNMOUNT]) destroy();
          $store.events[UNMOUNT] = [];
        }
      }, STORE_UNMOUNT_DELAY);
    };

    if (process.env.NODE_ENV !== 'production') {
      let originClean = $store[clean];
      $store[clean] = () => {
        for (let destroy of $store.events[UNMOUNT]) destroy();
        $store.events[UNMOUNT] = [];
        $store.active = false;
        originClean();
      };
    }

    return () => {
      $store.listen = originListen;
      $store.off = originOff;
    }
  })
};

let identity = a => a;
let storageEngine = {};
let eventsEngine = { addEventListener() {}, removeEventListener() {} };

function testSupport() {
  try {
    return typeof localStorage !== 'undefined'
  } catch {
    /* c8 ignore next 3 */
    // In Privacy Mode access to localStorage will return error
    return false
  }
}
if (testSupport()) {
  storageEngine = localStorage;
}

let windowPersistentEvents = {
  addEventListener(key, listener, restore) {
    window.addEventListener('storage', listener);
    window.addEventListener('pageshow', restore);
  },
  removeEventListener(key, listener, restore) {
    window.removeEventListener('storage', listener);
    window.removeEventListener('pageshow', restore);
  }
};

if (typeof window !== 'undefined') {
  eventsEngine = windowPersistentEvents;
}

function persistentAtom(name, initial = undefined, opts = {}) {
  let encode = opts.encode || identity;
  let decode = opts.decode || identity;

  let store = atom(initial);

  let set = store.set;
  store.set = newValue => {
    if (typeof newValue === 'undefined') {
      delete storageEngine[name];
    } else {
      storageEngine[name] = encode(newValue);
    }
    set(newValue);
  };

  function listener(e) {
    if (e.key === name) {
      if (e.newValue === null) {
        set(undefined);
      } else {
        set(decode(e.newValue));
      }
    } else if (!storageEngine[name]) {
      set(undefined);
    }
  }

  function restore() {
    store.set(storageEngine[name] ? decode(storageEngine[name]) : initial);
  }

  onMount(store, () => {
    restore();
    if (opts.listen !== false) {
      eventsEngine.addEventListener(name, listener, restore);
      return () => {
        eventsEngine.removeEventListener(name, listener, restore);
      }
    }
  });

  return store
}

const score = writable(0);
persistentAtom("user_uuid", crypto.randomUUID().toString());

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
//# sourceMappingURL=_layout.svelte-a85d30e1.js.map
