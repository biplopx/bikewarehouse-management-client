// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegVgff2EqIEpvzG8h9rprOe9Gi0XzDFc",
  authDomain: "bike-warehouse-6da93.firebaseapp.com",
  projectId: "bike-warehouse-6da93",
  storageBucket: "bike-warehouse-6da93.appspot.com",
  messagingSenderId: "162292050301",
  appId: "1:162292050301:web:e4c7f3f94b3ff0e4584414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;