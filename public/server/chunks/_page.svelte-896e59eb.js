import { z as create_anchor, I as head, D as escape, C as store_get, E as unsubscribe_stores, k as pop, F as attr, g as push } from './index3-b779fbfb.js';
import { s as session } from './session-04d0bf4b.js';
import './firebase.app-1cc0da1c.js';
import './index2-485a21d1.js';

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
  $$payload.out += `<section><h1>Here comes profile page</h1> <p>Your ID: ${escape(store_get($$store_subs, "$session", session)?.user?.uid)}</p> <p>DisplayName: ${escape(store_get($$store_subs, "$session", session)?.user?.displayName)}</p> ${anchor}`;
  DisplayNameForm($$payload);
  $$payload.out += `${anchor}</section>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-896e59eb.js.map
