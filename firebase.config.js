// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from " firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "yuome-app.firebaseapp.com",
  projectId: "yuome-app",
  storageBucket: "yuome-app.appspot.com",
  messagingSenderId: "438436550477",
  appId: "1:438436550477:web:878ea9ab94f0cf06574904",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();