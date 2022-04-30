// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUnN61WqyWTvQ1YFvxVhkj6k1Y0_txDb8",
  authDomain: "tecno-app-b87ee.firebaseapp.com",
  projectId: "tecno-app-b87ee",
  storageBucket: "tecno-app-b87ee.appspot.com",
  messagingSenderId: "851512977765",
  appId: "1:851512977765:web:829ba36968c456c1a8d98c",
  measurementId: "G-VJ0EPP87H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)