import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC354fTkn4FzouHEodJK1Wp8uv2cduykrw",
  authDomain: "gwitter-e2519.firebaseapp.com",
  projectId: "gwitter-e2519",
  storageBucket: "gwitter-e2519.appspot.com",
  messagingSenderId: "656420529889",
  appId: "1:656420529889:web:15409148998d0d0058f9a0",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
