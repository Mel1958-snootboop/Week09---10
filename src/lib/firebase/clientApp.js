"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Use automatic initialization
// https://firebase.google.com/docs/app-hosting/firebase-sdks#initialize-with-no-arguments

const firebaseConfig = {
  apiKey: "AIzaSyAku0Q6ZIhi54g3qfqZdRJ8be3mfm6sF3k",
  authDomain: "week09---10.firebaseapp.com",
  projectId: "week09---10",
  storageBucket: "week09---10.firebasestorage.app",
  messagingSenderId: "597020325861",
  appId: "1:597020325861:web:635627a75d1f007d60a10c",
  measurementId: "G-DGE3CE2KRK"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
