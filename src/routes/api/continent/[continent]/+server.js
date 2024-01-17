import { collection, getDocs, doc, query, where } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.app.js';
import { shuffle } from '$lib/utils.js';

export const GET = async ({ params }) => {
	const { continent } = params;

	// Querying based on continent doc
	const countryRef = collection(db, 'countries');
	const countryQuery = query(
		countryRef,
		where('continent', '==', doc(collection(db, 'continent'), continent))
	);
	const countryDocs = await getDocs(countryQuery);
	const countryList = countryDocs.docs.map((doc) => {
		return {
			id: doc.id,
			code: doc.data().code,
			name: doc.data().name,
			continent: doc.data().continent.id,
			answerOptions: []
		};
	});
	if (countryList.length == 0) {
		return new Response(JSON.stringify({ error: 'No countries found' }), { status: 404 });
	}

	// Shuffled countries and answer options
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
	return Response.json(shuffledCountries);
};
