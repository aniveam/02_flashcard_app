import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  Unsubscribe,
  User,
  UserCredential
} from "firebase/auth";
import { firebaseInit } from "./firebase-config";
const auth = getAuth(firebaseInit);
const provider = new GoogleAuthProvider();

export const SignUserIn = async (
  email: string,
  password: string
): Promise<void | UserCredential> => {
  if (!email || !password) {
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log("Error signing in with email and password: ", e);
  }
};

export const SignUserInGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (e) {
    console.log("Error signing in with google: ", e);
  }
};

export const CreateUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log(e);
  }
};

export const SignOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log("Error signing user out: ", e);
  }
};

export const userStateListener = (
  callback: NextOrObserver<User>
): Unsubscribe => {
  return onAuthStateChanged(auth, callback);
};
