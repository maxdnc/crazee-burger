import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const userReceived = docSnapShot.data();
    return userReceived;
  }
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const infoNewUser = {
    username: userId,
    menu: fakeMenu.LARGE,
  };
  await setDoc(docRef, infoNewUser);
  return infoNewUser;
};

export const authenticateUser = async (userId) => {
  const isUserExist = await getUser(userId);
  if (!isUserExist) {
    return await createUser(userId);
  }

  return isUserExist;
};
