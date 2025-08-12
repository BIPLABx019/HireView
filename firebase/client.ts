import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-kHsGmMwbWUsGQOOspIwodRb7vUd27zI",
  authDomain: "hireview-3fafb.firebaseapp.com",
  projectId: "hireview-3fafb",
  storageBucket: "hireview-3fafb.firebasestorage.app",
  messagingSenderId: "769004190064",
  appId: "1:769004190064:web:d2b73151356bd015d6f7b5",
  measurementId: "G-CHXS2749ER"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);