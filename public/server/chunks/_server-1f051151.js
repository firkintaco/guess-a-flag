import { c as collection, d as db, g as getDocs } from './firebase.app-bfd5c899.js';

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
//# sourceMappingURL=_server-1f051151.js.map
