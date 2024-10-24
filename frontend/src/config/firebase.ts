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
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseInit } from "./firebase-config";

const auth = getAuth(firebaseInit);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseInit);

export const SignUserIn = async (
  email: string,
  password: string
): Promise<{ error?: string; data?: UserCredential }> => {
  if (!email || !password) {
    return { error: "Email and password are required." };
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential };
  } catch (e: any) {
    let errorMessage = "An unknown error occurred. Please try again.";
    if (e.code === "auth/user-not-found") {
      errorMessage = "No account found with this email.";
    } else if (e.code === "auth/wrong-password") {
      errorMessage = "Incorrect password. Please try again.";
    } else if (e.code === "auth/too-many-requests") {
      errorMessage = "Too many attempts. Please wait and try again later.";
    } else if (e.code === "auth/invalid-login-credentials") {
      errorMessage = "Wrong email or password.";
    }
    console.error("Error signing in with email and password: ", e);
    return { error: errorMessage };
  }
};

export const SignUserInGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Create a document reference in the "users" collection
    const userDocRef = doc(collection(db, "users"), user.uid);

    // Set the user document
    await setDoc(userDocRef, {
      id: user.uid,
      email: user.email,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString()
    });
    return { success: "Created user successfully!" };
  } catch (e) {
    console.log("Error signing in with Google: ", e);
    return { error: "Error signing in with Google" };
  }
};

// This function can be used to create a user document
export const CreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Create a document reference in the "users" collection
    const userDocRef = doc(collection(db, "users"), user.uid);

    // Set the user document
    await setDoc(userDocRef, {
      id: user.uid,
      email: user.email,
      created_at: new Date().toLocaleString(),
      updated_at: new Date().toLocaleString()
    });
    return { success: "Created user successfully!" };
  } catch (error) {
    console.error("Error creating user: ", error);
    return { error: "Email already in use." };
  }
};

export const SignOutUser = async (): Promise<{ error?: string } | void> => {
  try {
    await signOut(auth);
  } catch (e) {
    console.log("Error logging out: ", e);
    return { error: "Error logging out." };
  }
};

export const userStateListener = (
  callback: NextOrObserver<User>
): Unsubscribe => {
  return onAuthStateChanged(auth, callback);
};
