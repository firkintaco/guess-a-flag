import { c as collection, q as query, w as where, d as doc, g as getDocs, b as db } from './firebase.app-7fb15254.js';
import { s as shuffle } from './utils-2587e5c0.js';

const GET = async ({ params }) => {
  const { continent } = params;
  const countryRef = collection(db, "countries");
  const countryQuery = query(
    countryRef,
    where("continent", "==", doc(collection(db, "continent"), continent))
  );
  const countryDocs = await getDocs(countryQuery);
  const countryList = countryDocs.docs.map((doc2) => {
    return {
      id: doc2.id,
      code: doc2.data().code,
      name: doc2.data().name,
      continent: doc2.data().continent.id,
      answerOptions: []
    };
  });
  if (countryList.length == 0) {
    return new Response(JSON.stringify({ error: "No countries found" }), { status: 404 });
  }
  const shuffledCountries = shuffle(countryList);
  shuffledCountries.forEach((country) => {
    country.answerOptions.push(country.name);
    while (country.answerOptions.length < 4) {
      const randomCountry = shuffledCountries[Math.floor(Math.random() * shuffledCountries.length)].name;
      if (!country.answerOptions.includes(randomCountry)) {
        country.answerOptions.push(randomCountry);
      }
    }
    country.answerOptions = shuffle(country.answerOptions);
  });
  return Response.json(shuffledCountries);
};

export { GET };
//# sourceMappingURL=_server-4bbdc3f4.js.map
