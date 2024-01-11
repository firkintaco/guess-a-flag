import { z as create_anchor, G as head, H as ensure_array_like, E as escape_text, D as unsubscribe_stores, k as pop, g as push } from './index-35d41c90.js';
import './store-4509874f.js';
import './index2-485a21d1.js';

function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let scores = [];
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Highscores</title>`;
  });
  $$payload.out += `<section class="container mx-auto"><h1 class="text-2xl">Highscores</h1> <table class="table-auto w-full border border-separate"><thead><tr><td class="font-bold">ID</td><td class="font-bold">Score</td></tr></thead><tbody>${anchor}`;
  if (scores !== null) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    const each_array = ensure_array_like(scores);
    $$payload.out += `${anchor_1}`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const score = each_array[$$index];
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}<tr class="p-2"><td>${escape_text(score.id)}</td><td>${escape_text(score.score)}</td></tr>${anchor_2}`;
    }
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor}</tbody></table></section>`;
  unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-8168eb92.js.map
