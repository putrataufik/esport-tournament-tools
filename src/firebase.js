import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFvvW_sx9sKOaIaLmLc3CH7ADPRIZr-2g",
  authDomain: "esport-tournament-tools.firebaseapp.com",
  projectId: "esport-tournament-tools",
  storageBucket: "esport-tournament-tools.appspot.com",
  messagingSenderId: "636848675435",
  appId: "1:636848675435:web:e7dd627a514bf717946f2e",
  measurementId: "G-JDEF2S7FXL"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);