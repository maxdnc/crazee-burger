import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const syncBothMenus = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);
  const newProduct = {
    username: userId,
    menu: menuUpdated,
  };
  setDoc(docRef, newProduct);
};

export const getMenu = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const { menu } = docSnapShot.data();
    return menu;
  }
};
