// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBTwa3FmAviFa_tfzX2GHrfS8j8K_RJQU",
  authDomain: "another-practise-project.firebaseapp.com",
  projectId: "another-practise-project",
  storageBucket: "another-practise-project.firebasestorage.app",
  messagingSenderId: "120141800671",
  appId: "1:120141800671:web:ce96b95fb0e82b14d5756a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;