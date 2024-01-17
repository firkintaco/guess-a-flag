import { G as attr, k as pop, g as push } from './index3-759fa29f.js';
import './client-a19d47e8.js';
import './firebase.app-7fb15254.js';
import './exports-4ef2d035.js';

function _page($$payload, $$props) {
  push(false);
  let email;
  let password;
  let displayName;
  $$payload.out += `<div class="relative flex flex-col items-center md:justify-center h-screen overflow-hidden"><div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top md:max-w-md"><h1 class="text-3xl font-semibold text-center text-gray-700">Register</h1> <form class="space-y-4"><div><label class="label" for="username"><span class="text-base label-text">Username</span></label> <input type="text" placeholder="Email Address" id="username" class="w-full input input-bordered"${attr("value", displayName, false)} required></div> <div><label class="label" for="email"><span class="text-base label-text">Email</span></label> <input type="text" placeholder="Email Address" id="email" class="w-full input input-bordered"${attr("value", email, false)} required></div> <div><label class="label" for="password"><span class="text-base label-text">Password</span></label> <input type="password" placeholder="Enter Password" class="w-full input input-bordered" id="password"${attr("value", password, false)} required></div> <div><button type="submit" class="btn btn-block">Register</button></div></form></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-bf255890.js.map
