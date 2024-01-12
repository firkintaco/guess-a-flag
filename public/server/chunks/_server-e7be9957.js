import { c as collection, a as db, d as doc, b as getDoc, s as setDoc, q as query, l as limit, o as orderBy, g as getDocs } from './firebase.app-ef5f3899.js';

const getUsers = async () => {
  const userCollection = collection(db, "scores");
  const userQuery = query(userCollection, orderBy("score", "desc"), limit(10));
  const userDocs = await getDocs(userQuery);
  const userList = userDocs.docs.map((user) => {
    return { ...user.data(), id: user.id };
  });
  return userList;
};
const GET = async () => {
  try {
    const users = await getUsers();
    return Response.json(users);
  } catch (error) {
    return Response.json({ error });
  }
};
const POST = async ({ url }) => {
  const id = url.searchParams.get("id");
  const score = url.searchParams.get("score");
  if (!id || !score) {
    return new Response("Fail", { status: 400 });
  }
  try {
    const parsedNumber = Number(score);
    const userCollection = collection(db, "scores");
    const userRef = doc(userCollection, id);
    const userDoc = await getDoc(userRef);
    if (userDoc.data().score < parsedNumber) {
      await setDoc(userRef, { id, score: parsedNumber });
    }
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.log("Error adding score " + error);
    const parsedNumber = Number(score);
    const userCollection = collection(db, "scores");
    const userRef = doc(userCollection, id);
    await setDoc(userRef, { id, score: parsedNumber });
    return new Response("Fail", { status: 400 });
  }
};

export { GET, POST };
//# sourceMappingURL=_server-e7be9957.js.map
