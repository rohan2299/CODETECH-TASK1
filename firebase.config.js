// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaJby7Kf8GYG9f2vDZO-nFnP6bHeRrBa8",
  authDomain: "book-store-1785f.firebaseapp.com",
  projectId: "book-store-1785f",
  storageBucket: "book-store-1785f.appspot.com",
  messagingSenderId: "265449896196",
  appId: "1:265449896196:web:245d32f48e6f4883c83851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;