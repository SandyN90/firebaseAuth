// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbXc-aD016-eDrjyWhHeX9EKObA9t3AlA",
    authDomain: "newfirebaseproject-da7e0.firebaseapp.com",
    projectId: "newfirebaseproject-da7e0",
    storageBucket: "newfirebaseproject-da7e0.appspot.com",
    messagingSenderId: "708825765367",
    appId: "1:708825765367:web:0f8acba804bfb3f84c0af2",
    measurementId: "G-J1N1XX7YVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app