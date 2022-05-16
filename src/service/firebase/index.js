
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnksJvirO95_bz_28qInxyPAzOmhyaKN0",
  authDomain: "tecnocenter1-67726.firebaseapp.com",
  projectId: "tecnocenter1-67726",
  storageBucket: "tecnocenter1-67726.appspot.com",
  messagingSenderId: "675694951613",
  appId: "1:675694951613:web:18eb98e19533dce73c8bd4"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)