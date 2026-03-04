// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgkQpvD5CRVar0rCMS9DJvoDpsaZfp3oA",
  authDomain: "mohform.firebaseapp.com",
  projectId: "mohform",
  storageBucket: "mohform.firebasestorage.app",
  messagingSenderId: "131182827923",
  appId: "1:131182827923:web:9fe20b086550ca1201f066",
  measurementId: "G-J3M1D3Q4EL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
