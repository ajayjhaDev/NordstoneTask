import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNR2fuYTXwBEJjWgDlHxQ0pSQgS4k1IOc",
  authDomain: "nordweb-bb8d2.firebaseapp.com",
  projectId: "nordweb-bb8d2",
  storageBucket: "nordweb-bb8d2.appspot.com",
  messagingSenderId: "49577464648",
  appId: "1:49577464648:web:ad1de1934c97934d5d597d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
