// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN8NGQLGkhJHZwqgpqcAflqqvoz6Kx224",
    authDomain: "basic-web-devolepment.firebaseapp.com",
    projectId: "basic-web-devolepment",
    storageBucket: "basic-web-devolepment.appspot.com",
    messagingSenderId: "875005014370",
    appId: "1:875005014370:web:4d99ea3edef10b041fbc3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;