// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOl8pWQhpyFWqjmyHS8vTdEyfw2vBZXkk",
  authDomain: "financeapp-b3063.firebaseapp.com",
  databaseURL: "https://financeapp-b3063-default-rtdb.firebaseio.com",
  projectId: "financeapp-b3063",
  storageBucket: "financeapp-b3063.appspot.com",
  messagingSenderId: "119057324311",
  appId: "1:119057324311:web:1cc3297a4df55323bf7f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {db};