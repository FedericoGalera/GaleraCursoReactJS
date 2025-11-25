// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHIG0TbVHtsDhKGtcpr3RNjVGOa4BZnTY",
  authDomain: "feyooxs-store.firebaseapp.com",
  projectId: "feyooxs-store",
  storageBucket: "feyooxs-store.firebasestorage.app",
  messagingSenderId: "1082776828678",
  appId: "1:1082776828678:web:6529987dea01c4bc0f7c87"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
