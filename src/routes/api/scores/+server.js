import {
	collection,
	getDocs,
	getDoc,
	setDoc,
	doc,
	query,
	orderBy,
	limit
} from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.app.js';

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

export const GET = async () => {
	try {
		const users = await getScores();
		return Response.json(users);
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}
};

export const POST = async ({ request }) => {
	const { userId, score, displayName } = await request.json();
	if (!userId || !score) {
		return new Response('Fail', { status: 400 });
	}
	const userCollection = collection(db, 'scores');
	const userRef = doc(userCollection, userId);

	try {
		const userDoc = await getDoc(userRef);

		if (!userDoc.exists() || userDoc.data().score < score) {
			await setDoc(userRef, { userId, score, displayName });
			return new Response('OK', { status: 200 });
		} else {
			return new Response('OK - No Update', { status: 200 });
		}
	} catch (error) {
		console.error('Error adding or updating score:', error);
		await setDoc(userRef, { userId, score, displayName });
		return new Response('Fail', { status: 400 });
	}
};
