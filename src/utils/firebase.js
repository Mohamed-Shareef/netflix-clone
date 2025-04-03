// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbGDwoiLsE4qZ2EjenaQULBpaLluB_ljg",
  authDomain: "netflix-clone-dd373.firebaseapp.com",
  projectId: "netflix-clone-dd373",
  storageBucket: "netflix-clone-dd373.firebasestorage.app",
  messagingSenderId: "934006560253",
  appId: "1:934006560253:web:e07f34fa5360ac7b64b594",
  measurementId: "G-Q2PDC70JRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
