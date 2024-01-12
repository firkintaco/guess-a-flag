import { writable } from 'svelte/store';
import { persistentAtom } from '@nanostores/persistent';

export const isLoading = writable(false);
export const countries = writable([]);
export const countryId = writable(0);
export const isCorrect = writable(false);
export const score = writable(0);
export const isQuestionAnswered = writable(false);
export const uuid = persistentAtom('user_uuid', crypto.randomUUID().toString());
export const isError = writable(false);
