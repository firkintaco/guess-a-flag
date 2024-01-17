import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.app';

export const GET = async () => {
	try {
		const continentRef = collection(db, 'continent');
		const continents = await getDocs(continentRef);
		const continentList = continents.docs.map((continent) => {
			return { ...continent.data(), href: `/continent/${continent.id}` };
		});

		return Response.json(continentList);
	} catch (error) {
		return Response.json({ error });
	}
};
