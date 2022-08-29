// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcrnZzwOMwvtYFknRG0WMH4HuyANJA0a4",
    authDomain: "pandantfs.firebaseapp.com",
    projectId: "pandantfs",
    storageBucket: "pandantfs.appspot.com",
    messagingSenderId: "919801623586",
    appId: "1:919801623586:web:eb69c561de36bc213d467b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);