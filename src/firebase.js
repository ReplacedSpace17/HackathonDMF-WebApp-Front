// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/app';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfY64W8HT_2-H-ILvgNcR6PJKD_QHq-w",
  authDomain: "bioharvest-bc783.firebaseapp.com",
  databaseURL: "https://bioharvest-bc783-default-rtdb.firebaseio.com",
  projectId: "bioharvest-bc783",
  storageBucket: "bioharvest-bc783.appspot.com",
  messagingSenderId: "499484997677",
  appId: "1:499484997677:web:26e5fa7535ff9203daa0a4",
  measurementId: "G-LL0ZSG01TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, firebase }; // Exporta las funciones necesarias de firebase.js