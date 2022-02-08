import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyDRsgECBVGTwsWWsDQsJN0IjPGdhpsKoTg",
  authDomain: "crudnuxt-ad7e9.firebaseapp.com",
  projectId: "crudnuxt-ad7e9",
  storageBucket: "crudnuxt-ad7e9.appspot.com",
  messagingSenderId: "541209025090",
  appId: "1:541209025090:web:15f4562845976c862bebdb"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}