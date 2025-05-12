// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKl6aTiuW-ETs6vIsy-1x5ZWq3q8bICeo",
  authDomain: "atomswebsite-1afd0.firebaseapp.com",
  projectId: "atomswebsite-1afd0",
  storageBucket: "atomswebsite-1afd0.firebasestorage.app",
  messagingSenderId: "377862822759",
  appId: "1:377862822759:web:dc2d3b69953fb5cfc56dc2",
  measurementId: "G-C3D6NE12JF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; 
