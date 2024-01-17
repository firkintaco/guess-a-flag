import { c as collection, b as db, g as getDocs } from './firebase.app-7fb15254.js';

const GET = async () => {
  try {
    const continentRef = collection(db, "continent");
    const continents = await getDocs(continentRef);
    const continentList = continents.docs.map((continent) => {
      return { ...continent.data(), href: `/continent/${continent.id}` };
    });
    return Response.json(continentList);
  } catch (error) {
    return Response.json({ error });
  }
};

export { GET };
//# sourceMappingURL=_server-7f99d2ef.js.map
