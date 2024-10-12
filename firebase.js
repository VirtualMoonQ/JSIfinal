import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

  // Import the functions you need from the SDKs you need

  const firebaseConfig = {
    apiKey: "AIzaSyDxSKzTuGrnSJwzacuoZfrRRoV_YC3uOp4",
    authDomain: "final-jsi.firebaseapp.com",
    projectId: "final-jsi",
    storageBucket: "final-jsi.appspot.com",
    messagingSenderId: "683996834354",
    appId: "1:683996834354:web:f171278dddf2d9c05e2a2b"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const subscriptions = [];
