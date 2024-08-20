// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt9IcND9WLl638-13480mR5Jdy0zza2LY",
  authDomain: "sasokibra.firebaseapp.com",
  databaseURL: "https://sasokibra-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sasokibra",
  storageBucket: "sasokibra.appspot.com",
  messagingSenderId: "950837323181",
  appId: "1:950837323181:web:209b741a56904ff10d2d24",
  measurementId: "G-YWFCNSQ3T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);