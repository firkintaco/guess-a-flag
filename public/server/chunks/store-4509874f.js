import { w as writable } from './index2-485a21d1.js';

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

export { score as s };
//# sourceMappingURL=store-4509874f.js.map
