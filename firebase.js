// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: "AIzaSyAEs9vPcpyvCG59iVi-iVOtPtWquLnuxjs",
    authDomain: "twitter-793bf.firebaseapp.com",
    projectId: "twitter-793bf",
    storageBucket: "twitter-793bf.appspot.com",
    messagingSenderId: "782158687199",
    appId: "1:782158687199:web:669ff0cb01e566afff326a"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };