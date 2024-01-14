import { F as attr, E as unsubscribe_stores, k as pop, g as push } from './index3-b779fbfb.js';
import './client-a19d47e8.js';
import './firebase.app-1cc0da1c.js';
import './exports-4ef2d035.js';

function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let email;
  let password;
  $$payload.out += `<div class="relative flex flex-col items-center md:justify-center h-screen overflow-hidden"><div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top md:max-w-md"><h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1> <form class="space-y-4"><div><label class="label" for="email"><span class="text-base label-text">Email</span></label> <input type="text" placeholder="Email Address" id="email" class="w-full input input-bordered"${attr("value", email, false)} required></div> <div><label class="label" for="password"><span class="text-base label-text">Password</span></label> <input type="password" placeholder="Enter Password" class="w-full input input-bordered" id="password"${attr("value", password, false)} required></div> <div><button type="submit" class="btn btn-block">Register</button></div></form></div></div>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-99c70258.js.map
