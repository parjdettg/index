// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "네_메모장_값",
  authDomain: "네_메모장_값",
  projectId: "네_메모장_값",
  storageBucket: "네_메모장_값",
  messagingSenderId: "네_메모장_값",
  appId: "네_메모장_값"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);