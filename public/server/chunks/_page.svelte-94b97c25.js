import { z as create_anchor, I as head, C as escape, B as store_get, D as unsubscribe_stores, k as pop, E as attr, g as push } from './index-7e7086d2.js';
import { s as session } from './session-4973a5bf.js';
import './firebase.app-09dc1e45.js';
import './index3-485a21d1.js';

function DisplayNameForm($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let displayName = store_get($$store_subs, "$session", session).user.displayName;
  $$payload.out += `<form><label for="name">Name:</label> <input type="text" id="name" name="name"${attr("value", displayName, false)}> <button type="submit">Set</button></form>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Profile Page</title>`;
  });
  $$payload.out += `<section><h1>Here comes profile page</h1> <p>Your ID: ${escape(store_get($$store_subs, "$session", session).user.uid)}</p> <p>DisplayName: ${escape(store_get($$store_subs, "$session", session).user.displayName)}</p> ${anchor}`;
  DisplayNameForm($$payload);
  $$payload.out += `${anchor}</section>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-94b97c25.js.map
