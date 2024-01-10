import { w as writable } from "./index2.js";
import { persistentAtom } from "@nanostores/persistent";
const isLoading = writable(false);
const countries = writable([]);
const countryId = writable(0);
const isCorrect = writable(false);
const score = writable(0);
const isQuestionAnswered = writable(false);
persistentAtom("user_uuid", crypto.randomUUID().toString());
export {
  isQuestionAnswered as a,
  isLoading as b,
  countries as c,
  countryId as d,
  isCorrect as i,
  score as s
};
