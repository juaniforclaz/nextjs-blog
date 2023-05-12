// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaiMAIX7Zkjtldh53BwPEOJQwsCKRHN-A",
  authDomain: "blog-51480.firebaseapp.com",
  projectId: "blog-51480",
  storageBucket: "blog-51480.appspot.com",
  messagingSenderId: "309105747605",
  appId: "1:309105747605:web:ce20e9d72935f617d65d9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
