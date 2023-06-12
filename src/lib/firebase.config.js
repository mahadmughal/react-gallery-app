// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovQzdAvc-6xGI8785NoHdNT3-tu0SXX8",
  authDomain: "firestock-fe2ac.firebaseapp.com",
  projectId: "firestock-fe2ac",
  storageBucket: "firestock-fe2ac.appspot.com",
  messagingSenderId: "250874213725",
  appId: "1:250874213725:web:48f97c2c65f38dcc9e24b4"
};

// Initialize Firebase
export const app = () => {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No firebase configuration object provided!');
  } else {
    console.log('Firebase initialized!');
  }
  initializeApp(firebaseConfig);
}

