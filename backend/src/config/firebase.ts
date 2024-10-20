import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert("./serviceAccount.json"),
});

export default admin;
