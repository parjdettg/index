// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjrqWteu1rLod6OU-6t-GxAY7WGcMWPXo",
  authDomain: "jinju-coop-web.firebaseapp.com",
  projectId: "jinju-coop-web",
  storageBucket: "jinju-coop-web.firebasestorage.app",
  messagingSenderId: "759661565652",
  appId: "1:759661565652:web:cb36258d63fee2bee08d41"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);