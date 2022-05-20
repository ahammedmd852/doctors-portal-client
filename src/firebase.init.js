// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR4MJUzyrIUvbTJ3_bUAibb_PBFYuxs9U",
  authDomain: "doctors-portal-b8346.firebaseapp.com",
  projectId: "doctors-portal-b8346",
  storageBucket: "doctors-portal-b8346.appspot.com",
  messagingSenderId: "836643450954",
  appId: "1:836643450954:web:410c080890770d9e0bf6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;