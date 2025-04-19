
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAnEQ9u4y6NKlKg5v1HxV1nwpksSkUFnaE",
  authDomain: "wiseprep-b4dd8.firebaseapp.com",
  projectId: "wiseprep-b4dd8",
  storageBucket: "wiseprep-b4dd8.firebasestorage.app",
  messagingSenderId: "949910058484",
  appId: "1:949910058484:web:2ef4f0cb7faf0047ea35a1",
  measurementId: "G-069L2707HQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
