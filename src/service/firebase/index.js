
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyASB2ajfVmbaKe4NkDNZfOTFZTQY8373i8",
  authDomain: "ecommerce-tecnocenter.firebaseapp.com",
  projectId: "ecommerce-tecnocenter",
  storageBucket: "ecommerce-tecnocenter.appspot.com",
  messagingSenderId: "1014953493321",
  appId: "1:1014953493321:web:1088194f0e88e3f1b61098"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)