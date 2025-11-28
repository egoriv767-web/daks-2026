import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSy...",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "daks-2026.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "daks-2026",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "daks-2026.appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
