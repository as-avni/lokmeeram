// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyCCXO3ffA0eHYWsvPlud8DDNCb7TmnDhZw",
    authDomain: "lok-me-ram-blogs.firebaseapp.com",
    projectId: "lok-me-ram-blogs",
    storageBucket: "lok-me-ram-blogs.firebasestorage.app",
    messagingSenderId: "913341587064",
    appId: "1:913341587064:web:8630d7c2495723fdf6578d",
    measurementId: "G-KLHHTM2X4Q"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);