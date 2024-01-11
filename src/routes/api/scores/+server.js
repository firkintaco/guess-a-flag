import { collection, getDocs, setDoc, doc, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../../firebase.app';

const getUsers = async () => {
	const userCollection = collection(db, 'scores');
	const userQuery = query(userCollection, orderBy('score', 'desc'), limit(10));
	const userDocs = await getDocs(userQuery);
	const userList = userDocs.docs.map((user) => {
		return { ...user.data(), id: user.id };
	});
	return userList;
};

export const GET = async () => {
	try {
		const users = await getUsers();
		return Response.json(users);
	} catch (error) {
		return Response.json({ error: error });
	}
};

export const POST = async ({ url }) => {
	const id = url.searchParams.get('id');
	const score = url.searchParams.get('score');
	console.log(url);
	if (!id || !score) {
		return new Response('Fail', { status: 400 });
	}
	try {
		const parsedNumber = Number(score);
		const userCollection = collection(db, 'scores');
		const userRef = doc(userCollection, id);
		await setDoc(userRef, { id, score: parsedNumber });
		return new Response('OK', { status: 200 });
	} catch (error) {
		return new Response('Fail', { status: 400 });
	}
};
