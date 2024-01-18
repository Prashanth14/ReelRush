// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDngK3r8TLNKd66ckq2MaA6GKonJIbNdGc",
  authDomain: "reelrush-d3d23.firebaseapp.com",
  projectId: "reelrush-d3d23",
  storageBucket: "reelrush-d3d23.appspot.com",
  messagingSenderId: "856631444970",
  appId: "1:856631444970:web:bd95e853fd9410dad71e93",
  measurementId: "G-B7QF4GXMB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);