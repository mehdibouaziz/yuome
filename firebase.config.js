// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from " firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxZbBD893B7k2UK4w6VSIsqQPY_KXDNOE",
  authDomain: "yuome-app.firebaseapp.com",
  projectId: "yuome-app",
  storageBucket: "yuome-app.appspot.com",
  messagingSenderId: "438436550477",
  appId: "1:438436550477:web:5611fa365f0f6957574904"
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
export const db = getFirestore();