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

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);
  const infoUser = {
    username: userId,
    menu: fakeMenu.LARGE,
  };
  setDoc(docRef, infoUser);
};

export const authenticateUser = async (userId) => {
  const isUserExist = await getUser(userId);
  if (!isUserExist) {
    createUser(userId);
  }
};
