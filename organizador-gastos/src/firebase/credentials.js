// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt95nsP45_0EinghChfAojXqVXeDe08po",
  authDomain: "organizador-gastos.firebaseapp.com",
  projectId: "organizador-gastos",
  storageBucket: "organizador-gastos.appspot.com",
  messagingSenderId: "667015077188",
  appId: "1:667015077188:web:090ef7f16dc08ac83a8b11",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
