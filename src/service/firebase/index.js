
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBqv91GwStv3BB1MYg4DPQr7Lf6xUlJgzE",
  authDomain: "tecnocenter-9dd8c.firebaseapp.com",
  projectId: "tecnocenter-9dd8c",
  storageBucket: "tecnocenter-9dd8c.appspot.com",
  messagingSenderId: "1025540238458",
  appId: "1:1025540238458:web:f9a77f42fedff012f59fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

