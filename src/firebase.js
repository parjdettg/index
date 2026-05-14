// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ 여기가 제일 중요해! 아까 메모장에 저장한 네 '열쇠'들을 여기에 채워넣어야 함
const firebaseConfig = {
  apiKey: "네_메모장에_있는_apiKey_복사",
  authDomain: "네_메모장에_있는_authDomain_복사",
  projectId: "네_메모장에_있는_projectId_복사",
  storageBucket: "네_메모장에_있는_storageBucket_복사",
  messagingSenderId: "네_메모장에_있는_messagingSenderId_복사",
  appId: "네_메모장에_있는_appId_복사"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 다른 파일(로그인 페이지, 갤러리 페이지 등)에서 불러다 쓸 수 있게 내보내기(Export)
export const auth = getAuth(app); // 로그인 기능 담당
export const db = getFirestore(app); // 데이터베이스 기능 담당