// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSVJTn-Tu9lds9PnpzwxpleuXmjshRbo",
  authDomain: "seg3102-lab5-7c21b.firebaseapp.com",
  projectId: "seg3102-lab5-7c21b",
  storageBucket: "seg3102-lab5-7c21b.appspot.com",
  messagingSenderId: "590897115413",
  appId: "1:590897115413:web:f16ce8e4041c0e43b1f91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;