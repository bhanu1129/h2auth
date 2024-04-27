// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtCzESehcixljbHHeYdvA9UMNOEKILO3w",
  authDomain: "h2auth-7dd1c.firebaseapp.com",
  projectId: "h2auth-7dd1c",
  storageBucket: "h2auth-7dd1c.appspot.com",
  messagingSenderId: "180860406163",
  appId: "1:180860406163:web:ae3813bba492e7a9358066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
