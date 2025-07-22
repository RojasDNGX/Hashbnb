import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCv5zMKx6eeBNW53TDXm8irLCYZ9PfdVM",
  authDomain: "loginaula-6836f.firebaseapp.com",
  projectId: "loginaula-6836f",
  storageBucket: "loginaula-6836f.firebasestorage.app",
  messagingSenderId: "217580725926",
  appId: "1:217580725926:web:65a396e850c92d2ef27667",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
