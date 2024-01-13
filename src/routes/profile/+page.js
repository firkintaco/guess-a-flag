import { redirect } from '@sveltejs/kit';
import { session } from '$lib/session.js';

export const load = async () => {
	const unsubscribe = session.subscribe((user) => {
		if (!user) {
			throw redirect(302, '/auth/login');
		}
		console.log(user);
	});

	unsubscribe();

	return {};
};
