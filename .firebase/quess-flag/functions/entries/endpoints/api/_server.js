import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB0P3GEzpj4i6Fjl61e2hFOLGVXDVtBchw",
  authDomain: "quess-flag.firebaseapp.com",
  projectId: "quess-flag",
  storageBucket: "quess-flag.appspot.com",
  messagingSenderId: "1097862029254",
  appId: "1:1097862029254:web:1621da69a16f7a5947dcc7",
  measurementId: "G-G82GV8S1PQ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const shuffle = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};
async function getCountries(db2) {
  const countriesCollection = collection(db2, "countries");
  const countriesSnapshot = await getDocs(countriesCollection);
  const countryList = countriesSnapshot.docs.map((doc2) => {
    return {
      id: doc2.id,
      code: doc2.data().code,
      name: doc2.data().name,
      continent: doc2.data().continent.id,
      answerOptions: []
    };
  });
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
  return shuffledCountries;
}
const getCountry = async (countryId) => {
  const docRef = doc(db, "countries", countryId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
async function GET({ url }) {
  if (url.searchParams.get("id") && url.searchParams.get("answer")) {
    const id = url.searchParams.get("id");
    const answer = url.searchParams.get("answer");
    console.log("id: " + id);
    const country = await getCountry(id);
    if (country.name === answer) {
      return Response.json({ correct: true });
    }
    return Response.json({ correct: false });
  }
  if (url.searchParams.get("id")) {
    return Response.json(await getCountry(url.searchParams.get("id")));
  }
  console.log(url);
  return Response.json(await getCountries(db));
}
export {
  GET
};
