// Import Firebase
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDNUYqS7di0P0mfn1w1BSv-jz_g3IWDIbE",
  authDomain: "grocer-auth.firebaseapp.com",
  projectId: "grocer-auth",
  storageBucket: "grocer-auth.firebasestorage.app",
  messagingSenderId: "13140695785",
  appId: "1:13140695785:web:31372623dbc3be7f952e78",
  measurementId: "G-D791E19Q0Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional) - removed unused

// 🔥 IMPORTANT: AUTH EXPORT
export const auth = getAuth(app);