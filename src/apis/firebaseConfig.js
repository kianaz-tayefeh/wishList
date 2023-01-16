import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const { REACT_APP_API_URL } = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyBa40A6r5WpILo4SKJHHa9EGXLBxIfd2MA",
  authDomain: "wish-list-ff204.firebaseapp.com",
  databaseURL: `${REACT_APP_API_URL}`,
  projectId: "wish-list-ff204",
  storageBucket: "wish-list-ff204.appspot.com",
  messagingSenderId: "1007114120430",
  appId: "1:1007114120430:web:85c0fad89bc865e59297ff",
  measurementId: "G-G4BL41W235",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
