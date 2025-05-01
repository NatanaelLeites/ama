import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIydQT_mFkM0wn06pgky6j3Xo_28q0t2U",
  authDomain: "ama-sofi.firebaseapp.com",
  projectId: "ama-sofi",
  storageBucket: "ama-sofi.firebasestorage.app",
  messagingSenderId: "139766788568",
  appId: "1:139766788568:web:c3e40e01dab93fcac5c2ad"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)