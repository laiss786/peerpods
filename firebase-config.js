import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqS89eipmvibeCeH0BMy5oVwd-YDPxu6I",
  authDomain: "peerpods-bc7e1.firebaseapp.com",
  projectId: "peerpods-bc7e1",
  storageBucket: "peerpods-bc7e1.firebasestorage.app",
  messagingSenderId: "110038510058",
  appId: "1:110038510058:web:4dec4aef7e3549d8182a93"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
