import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe0ymiq7-xQkryep_gM_n55XUFE4DL2As",
  authDomain: "tweeter-228eb.firebaseapp.com",
  projectId: "tweeter-228eb",
  storageBucket: "tweeter-228eb.appspot.com",
  messagingSenderId: "379870206403",
  appId: "1:379870206403:web:958f46354aec43720c0576",
  measurementId: "G-Y393FSYMF8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// const db = firebaseApp.firestore();
export const db = getFirestore(firebaseApp);
export const auth = firebase.auth();

// export default { auth, db };