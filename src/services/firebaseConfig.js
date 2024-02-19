// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2jdY5hE7xQX0uOKJ6USp4lNZpliADMjY",
  authDomain: "coderhouse-e-commerce-aae17.firebaseapp.com",
  projectId: "coderhouse-e-commerce-aae17",
  storageBucket: "coderhouse-e-commerce-aae17.appspot.com",
  messagingSenderId: "332075191564",
  appId: "1:332075191564:web:c7689085d55894d5414d29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)