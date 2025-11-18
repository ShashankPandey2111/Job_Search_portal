// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXJ7f5isGJyTnqeb8wv_B7YwDKub0EZR0",
  authDomain: "online-job-portal-ca0aa.firebaseapp.com",
  projectId: "online-job-portal-ca0aa",
  storageBucket: "online-job-portal-ca0aa.firebasestorage.app",
  messagingSenderId: "161714694439",
  appId: "1:161714694439:web:34461571b3ebad0d50e102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};