// Import the functions you need from the SDKs you need

import { getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkD4w5kmVWbwEIO9wTDS7J6CevRgHIR-I",
  authDomain: "clone-eaa3b.firebaseapp.com",
  projectId: "clone-eaa3b",
  storageBucket: "clone-eaa3b.appspot.com",
  messagingSenderId: "859957120781",
  appId: "1:859957120781:web:3dd8b2ecca81862eb92a44",
  measurementId: "G-7YVQT21FQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();