// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3PX9fHf59HgTbAEgMTWA9Bg4_F0iWcrw",
  authDomain: "queen-projectprogress.firebaseapp.com",
  projectId: "queen-projectprogress",
  storageBucket: "queen-projectprogress.appspot.com",
  messagingSenderId: "90506208306",
  appId: "1:90506208306:web:571489520fd30082a8c82b",
  measurementId: "G-XJKSKQPJ57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = getAuth(app);

export {firebase, firebaseConfig, db, auth};