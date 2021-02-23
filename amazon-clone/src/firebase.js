import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxImF47yoVNBpxwlFzvSfmTOaWWWoFOm8",
  authDomain: "clone-b9763.firebaseapp.com",
  projectId: "clone-b9763",
  storageBucket: "clone-b9763.appspot.com",
  messagingSenderId: "888923614462",
  appId: "1:888923614462:web:2349de95fe708cae6109af",
  measurementId: "G-Y9LDNREZ1T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
