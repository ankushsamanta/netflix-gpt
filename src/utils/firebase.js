// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9xQ6nDksoxRpEz_1YL8jxZwRjwCWBxGQ",
  authDomain: "netflixgpt-ankush.firebaseapp.com",
  projectId: "netflixgpt-ankush",
  storageBucket: "netflixgpt-ankush.firebasestorage.app",
  messagingSenderId: "209360500313",
  appId: "1:209360500313:web:3c762265608129153fa348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();