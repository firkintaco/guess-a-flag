import "./index.js";
const snippet_symbol = Symbol.for("svelte.snippet");
function add_snippet_symbol(fn) {
  fn[snippet_symbol] = true;
  return fn;
}
function validate_component(component_fn) {
  if (component_fn?.[snippet_symbol] === true) {
    throw new Error("A snippet must be rendered with `{@render ...}`");
  }
  return component_fn;
}
export {
  add_snippet_symbol as a,
  validate_component as v
};
