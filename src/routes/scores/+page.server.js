import { db } from '$lib/firebase/firebase.app';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
export const prerender = false;

const getScores = async () => {
	const userCollection = collection(db, 'scores');
	const userQuery = query(userCollection, orderBy('score', 'desc'), limit(10));
	const userDocs = await getDocs(userQuery);
	const userList = userDocs.docs.map((user) => {
		return {
			...user.data(),
			id: user.id
		};
	});

	return userList;
};
export const load = async () => {
	const scores = await getScores();
	return { scores };
};
