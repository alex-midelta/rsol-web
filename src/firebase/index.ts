// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIrHt2l51RtNi9p2JN8qETH0XvUnfG2Rw",
  authDomain: "rsol-web.firebaseapp.com",
  projectId: "rsol-web",
  storageBucket: "rsol-web.appspot.com",
  messagingSenderId: "900319442075",
  appId: "1:900319442075:web:6ace27cb12f7d0455cc23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db: any = getFirestore(app);

export {
  db
}