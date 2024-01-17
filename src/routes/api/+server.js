import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.app.js';
import { shuffle } from '$lib/utils.js';

async function getCountries(db) {
	const countriesCollection = collection(db, 'countries');
	const countriesSnapshot = await getDocs(countriesCollection);
	const countryList = countriesSnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			code: doc.data().code,
			name: doc.data().name,
			continent: doc.data().continent.id,
			answerOptions: []
		};
	});
	const shuffledCountries = shuffle(countryList);
	shuffledCountries.forEach((country) => {
		country.answerOptions.push(country.name);
		while (country.answerOptions.length < 4) {
			const randomCountry =
				shuffledCountries[Math.floor(Math.random() * shuffledCountries.length)].name;
			if (!country.answerOptions.includes(randomCountry)) {
				country.answerOptions.push(randomCountry);
			}
		}
		country.answerOptions = shuffle(country.answerOptions);
	});

	return shuffledCountries;
}

const getCountry = async (countryId) => {
	const docRef = doc(db, 'countries', countryId);
	const docSnap = await getDoc(docRef);
	return docSnap.data();
};
export async function GET({ url }) {
	if (url.searchParams.get('id') && url.searchParams.get('answer')) {
		const id = url.searchParams.get('id');
		const answer = url.searchParams.get('answer');
		const country = await getCountry(id);
		if (country.name === answer) {
			return Response.json({ correct: true });
		}
		return Response.json({ correct: false });
	}
	if (url.searchParams.get('id')) {
		return Response.json(await getCountry(url.searchParams.get('id')));
	}
	return Response.json(await getCountries(db));
}
