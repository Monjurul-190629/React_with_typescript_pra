// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnhxCnn48EOiX15vwGZPe0zc9fBAevEXU",
  authDomain: "practise-project-3332b.firebaseapp.com",
  projectId: "practise-project-3332b",
  storageBucket: "practise-project-3332b.firebasestorage.app",
  messagingSenderId: "699427787211",
  appId: "1:699427787211:web:22d067b2f91b55921ba64e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;