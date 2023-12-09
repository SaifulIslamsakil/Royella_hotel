
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiGeHPOwnJU6Wi4ww4l4R-hD7HbTnOuQ8",
  authDomain: "royella-hottel.firebaseapp.com",
  projectId: "royella-hottel",
  storageBucket: "royella-hottel.appspot.com",
  messagingSenderId: "894688805997",
  appId: "1:894688805997:web:d5b9c8ab6dace56fe02b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app