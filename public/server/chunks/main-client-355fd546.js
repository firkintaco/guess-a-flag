import { H as get_or_init_context_map } from './index3-b779fbfb.js';

function getContext(key) {
  const context_map = get_or_init_context_map();
  return (
    /** @type {T} */
    context_map.get(key)
  );
}
function setContext(key, context) {
  const context_map = get_or_init_context_map();
  context_map.set(key, context);
  return context;
}

export { getContext as g, setContext as s };
//# sourceMappingURL=main-client-355fd546.js.map
