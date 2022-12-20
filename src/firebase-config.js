// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAodarp7LUdNMIrew9EVg9eceFPhKzhqF0",
  authDomain: "thrivers-assignent.firebaseapp.com",
  projectId: "thrivers-assignent",
  storageBucket: "thrivers-assignent.appspot.com",
  messagingSenderId: "535343624835",
  appId: "1:535343624835:web:9b2f7089d0ed49e203e1b6",
  measurementId: "G-H004GVBK7R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
