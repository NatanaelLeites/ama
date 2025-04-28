import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIydQT_mFkM0wn06pgky6j3Xo_28q0t2U",
  authDomain: "ama-sofi.firebaseapp.com",
  projectId: "ama-sofi",
  storageBucket: "ama-sofi.firebasestorage.app",
  messagingSenderId: "139766788568",
  appId: "1:139766788568:web:c3e40e01dab93fcac5c2ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)