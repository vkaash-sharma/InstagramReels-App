// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFPSgcEbDSVR9ywmJGEV4zNpu-cuL7yIU",
  authDomain: "instagram-reels-1144f.firebaseapp.com",
  projectId: "instagram-reels-1144f",
  storageBucket: "instagram-reels-1144f.appspot.com",
  messagingSenderId: "69018990616",
  appId: "1:69018990616:web:9410af391e1d3aba5eeb6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth};