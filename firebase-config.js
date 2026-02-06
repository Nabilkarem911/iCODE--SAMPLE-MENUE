// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// 🔴 استبدل البيانات دي ببيانات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSy.......",
  authDomain: "icode-menu.firebaseapp.com",
  projectId: "icode-menu",
  storageBucket: "icode-menu.appspot.com",
  messagingSenderId: ".......",
  appId: "......."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, getDoc, setDoc, updateDoc, arrayUnion, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
