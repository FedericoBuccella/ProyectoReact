
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdo7uTWMJW8tbn_1wRALuqpDKl3hlNRQU",
  authDomain: "tecnocenter-9f5ff.firebaseapp.com",
  projectId: "tecnocenter-9f5ff",
  storageBucket: "tecnocenter-9f5ff.appspot.com",
  messagingSenderId: "46797701504",
  appId: "1:46797701504:web:e9bd036e0d6c52e218c165"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)