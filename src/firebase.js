import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClgxt7RGfjNp8jo5XaJU_CzNNdqwJGe7Q",
  authDomain: "nhl-website.firebaseapp.com",
  projectId: "nhl-website",
  storageBucket: "nhl-website.appspot.com",
  messagingSenderId: "180172327358",
  appId: "1:180172327358:web:415e84328d59dcb2add1ef"
};

const APP = initializeApp(firebaseConfig);
const DB = getFirestore(APP);
const AUTH = getAuth(APP);

export { APP, DB, AUTH };
