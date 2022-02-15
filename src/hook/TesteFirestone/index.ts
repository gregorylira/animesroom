import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";

export const createGroceryList = (userName: string) => {
  const groceriesColRef = collection(db, "contacts");
  console.log(groceriesColRef);
  return addDoc(groceriesColRef, {
    created: serverTimestamp(),
    users: [{ name: userName }],
  });
};
