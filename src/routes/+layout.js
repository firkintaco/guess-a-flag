import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '$lib/firebase/firebase.app.js';

export const load = async ({ url }) => {
	const getAuthUser = () => {
		return new Promise((resolve) => {
			onAuthStateChanged(auth, (user) => resolve(user ? user : false));
		});
	};

	return {
		getAuthUser: getAuthUser,
		url: url.pathname
	};
};
