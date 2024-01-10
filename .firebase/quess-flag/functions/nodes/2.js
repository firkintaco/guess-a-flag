import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.4NSxSGfB.js","_app/immutable/chunks/disclose-version.Cmz5mThz.js","_app/immutable/chunks/runtime.TOA9DToB.js","_app/immutable/chunks/store.B524xEO-.js","_app/immutable/chunks/index.K1lkvplB.js","_app/immutable/chunks/main-client.i1X26JgJ.js"];
export const stylesheets = [];
export const fonts = [];
