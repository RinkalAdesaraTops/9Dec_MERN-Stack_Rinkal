// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNBfaBC_D7vhwE6CJJJI99SGay7bRnh6c",
  authDomain: "decmernstack.firebaseapp.com",
  projectId: "decmernstack",
  storageBucket: "decmernstack.firebasestorage.app",
  messagingSenderId: "478924067412",
  appId: "1:478924067412:web:c250f5a37c4e294333d3c1",
  measurementId: "G-5YGTWNQCSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}