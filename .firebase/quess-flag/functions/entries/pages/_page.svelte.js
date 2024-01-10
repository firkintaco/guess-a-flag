import { a as push, b as attr, c as stringify, e as escape_text, u as unsubscribe_stores, d as bind_props, p as pop, f as create_anchor, h as ensure_array_like, s as store_get_dev, i as head, j as store_set } from "../../chunks/index.js";
import { i as isCorrect, a as isQuestionAnswered, c as countries, b as isLoading, d as countryId } from "../../chunks/store.js";
import { v as validate_component } from "../../chunks/validate.js";
function AnswerOptionButton($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let id = $$props["id"];
  let option = $$props["option"];
  let buttonColor = "bg-blue-700";
  $$payload.out += `<button${attr("class", `shadow p-2 ${stringify(buttonColor)} min-w-full rounded text-white font-bold`, false)}>${escape_text(option)}</button>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { id, option });
  pop();
}
AnswerOptionButton.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function FlagCard($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let country = $$props["country"];
  let fetchData = $$props["fetchData"];
  let isAlreadyAnswered = false;
  const anchor = create_anchor($$payload);
  const anchor_4 = create_anchor($$payload);
  const anchor_5 = create_anchor($$payload);
  $$payload.out += `<div class="max-w-lg rounded overflow-hidden shadow-lg"><img class="w-full"${attr("src", `https://flagcdn.com/h240/${stringify(country.code)}.png`, false)} height="240" width="360"${attr("alt", country.code, false)}> <div class="px-6 py-4"><div class="font-bold text-xl mb-2">What country is this?</div> <div class="grid gap-2 mb-2 sm:grid-cols-1 md:grid-cols-2">${anchor}`;
  {
    const anchor_1 = create_anchor($$payload);
    const each_array = ensure_array_like(country.answerOptions);
    $$payload.out += `${anchor_1}`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const option = each_array[$$index];
      const anchor_2 = create_anchor($$payload);
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `${anchor_2}${anchor_3}`;
      validate_component(AnswerOptionButton)($$payload, { id: country.id, option, isAlreadyAnswered });
      $$payload.out += `${anchor_3}${anchor_2}`;
    }
    $$payload.out += `${anchor_1}`;
  }
  $$payload.out += `${anchor}</div> ${anchor_4}`;
  if (store_get_dev($$store_subs, "$isCorrect", isCorrect)) {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<button class="w-full bg-blue-700 px-6 py-4 rounded font-bold text-white shadow">Next country</button>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_4}</div> ${anchor_5}`;
  if (!store_get_dev($$store_subs, "$isCorrect", isCorrect) && store_get_dev($$store_subs, "$isQuestionAnswered", isQuestionAnswered)) {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<button class="w-full bg-blue-700 rounded font-bold text-white shadow px-6 py-4 mt-4">Restart</button>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_5}</div>`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { country, fetchData });
  pop();
}
FlagCard.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
function _page($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let data;
  const fetchData = async () => {
    store_set(isLoading, true);
    const response = await fetch("/api").then((response2) => response2.json());
    store_set(countries, response);
    store_get_dev($$store_subs, "$countries", countries)[0];
    store_set(isLoading, false);
  };
  console.log(data);
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Home</title>`;
    $$payload2.out += `<meta name="description" content="Quess-A-Flag">`;
  });
  $$payload.out += `${anchor}`;
  if (store_get_dev($$store_subs, "$isLoading", isLoading)) {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<h1>Loading</h1>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<section class="container mx-auto">${anchor_1}`;
    if (store_get_dev($$store_subs, "$countries", countries).length !== 0) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      validate_component(FlagCard)($$payload, {
        country: store_get_dev($$store_subs, "$countries", countries)[store_get_dev($$store_subs, "$countryId", countryId)],
        fetchData
      });
      $$payload.out += `${anchor_2}`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_1}</section> <style>section { display: flex; flex-direction: column; justify-content: center; align-items: center; flex: 0.6; } h1 { width: 100%; } .welcome { display: block; position: relative; width: 100%; height: 0; padding: 0 0 calc(100% * 495 / 2048) 0; } .welcome img { position: absolute; width: 100%; height: 100%; top: 0; display: block; }</style>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte-5-preview.vercel.app/docs/breaking-changes#components-are-no-longer-classes for more information");
};
export {
  _page as default
};
