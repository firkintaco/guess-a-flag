import { z as create_anchor, R as head, H as ensure_array_like, D as escape_text, j as bind_props, k as pop, g as push } from './index3-1a6115b8.js';
import './utils2-de403b1a.js';

function _page($$payload, $$props) {
  push(false);
  let data = $$props["data"];
  const tmp = data, scores = tmp.scores;
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Highscores</title>`;
  });
  $$payload.out += `<section class="container max-w-lg mx-auto bg-white rounded-lg p-6 shadow"><h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Highscores</h2> <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">${anchor}`;
  if (scores !== null) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    const each_array = ensure_array_like(scores);
    $$payload.out += `${anchor_1}`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const score = each_array[$$index];
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}<li><span class="font-semibold text-gray-900 dark:text-white">${escape_text(score.displayName ? score.displayName : score.userId)}</span> with <span class="font-semibold text-gray-900 dark:text-white">${escape_text(score.score)}</span> points</li>${anchor_2}`;
    }
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor}</ol></section>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-a8c9d82f.js.map
