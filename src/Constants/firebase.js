// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO81YgYfl_RgbCEniOnEZBiOrW1W8xXtI",
  authDomain: "my-d83d2.firebaseapp.com",
  projectId: "my-d83d2",
  storageBucket: "my-d83d2.appspot.com",
  messagingSenderId: "186493121772",
  appId: "1:186493121772:web:d691ac73a220c38a97e1c9",
  measurementId: "G-ZHXRG3ETP1"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();