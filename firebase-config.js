import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, arrayUnion, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHw9aNyLuZZ-_90OK0xIgRZ62SPawEthc",
  authDomain: "ai-menu-28154.firebaseapp.com",
  projectId: "ai-menu-28154",
  storageBucket: "ai-menu-28154.firebasestorage.app",
  messagingSenderId: "438250172534",
  appId: "1:438250172534:web:de6cc1ea07fc7cef8baf57",
  measurementId: "G-GPZR14PB92"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, arrayUnion, query, where, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged };
