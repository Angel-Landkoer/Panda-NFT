// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbEGmENIOMgajq8vflYNB42fjbALukdMs",
    authDomain: "panta-nfts.firebaseapp.com",
    projectId: "panta-nfts",
    storageBucket: "panta-nfts.appspot.com",
    messagingSenderId: "1033843763428",
    appId: "1:1033843763428:web:fa513757a1127e6909a4f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);