// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR61dkpsiGFCQRzCQ4nkAbU0plC-kYslY",
  authDomain: "make-cardgame.firebaseapp.com",
  projectId: "make-cardgame",
  storageBucket: "make-cardgame.appspot.com",
  messagingSenderId: "1016341861949",
  appId: "1:1016341861949:web:c95383455399adf6597c54",
  measurementId: "G-RBP9Q9N1ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);