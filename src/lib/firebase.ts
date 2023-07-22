// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBufTiGppCUY6jplwZZ7BHnQZeHjcX4OGQ",
  authDomain: "linktree-like.firebaseapp.com",
  projectId: "linktree-like",
  storageBucket: "linktree-like.appspot.com",
  messagingSenderId: "917162964424",
  appId: "1:917162964424:web:59f44efdf967617b427cfd",
  measurementId: "G-0XKYP25J2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);