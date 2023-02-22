// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYggShsu2F8Jayd_59duoljv05qNCWkfk",
  authDomain: "anna-yujeong-an.firebaseapp.com",
  projectId: "anna-yujeong-an",
  storageBucket: "anna-yujeong-an.appspot.com",
  messagingSenderId: "625684084068",
  appId: "1:625684084068:web:f77d9e01bce81096f2f671",
  measurementId: "G-F9ZYYD3NM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);