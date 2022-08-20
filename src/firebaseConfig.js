// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC1gVBIxAaSV-HRXAoL4KM6tc3ubwssYxI",
    authDomain: "panda-nft-44791.firebaseapp.com",
    projectId: "panda-nft-44791",
    storageBucket: "panda-nft-44791.appspot.com",
    messagingSenderId: "462577027129",
    appId: "1:462577027129:web:eed3228a05b6d047b325e8",
    measurementId: "G-R9Y4CFZLP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);