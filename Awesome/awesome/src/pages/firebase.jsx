// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjr5D7MQ9zqhnMtoMXMjJcWa_qKg4mpNs",
  authDomain: "awesome-f6b12.firebaseapp.com",
  projectId: "awesome-f6b12",
  storageBucket: "awesome-f6b12.appspot.com",
  messagingSenderId: "700811657124",
  appId: "1:700811657124:web:9565d5f853d9fcf5990b31",
  measurementId: "G-3C9WH16CJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);