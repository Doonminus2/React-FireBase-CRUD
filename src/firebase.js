// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArm0H9FEUKNCQn0lq4zs6MhjkAQwuHB4M",
  authDomain: "realtime-database-f5b27.firebaseapp.com",
  projectId: "realtime-database-f5b27",
  storageBucket: "realtime-database-f5b27.firebasestorage.app",
  messagingSenderId: "858404815522",
  appId: "1:858404815522:web:6a18aba60360ee0ec14dfb",
  measurementId: "G-LYGVV7R611",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app);
export { DB };
