// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdOAHh238dCHnO9SzNPj9vu-3X_uwKxvI",
  authDomain: "indepentent-service-providerme.firebaseapp.com",
  projectId: "indepentent-service-providerme",
  storageBucket: "indepentent-service-providerme.appspot.com",
  messagingSenderId: "579769789316",
  appId: "1:579769789316:web:cd76e89715c5868b774bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;