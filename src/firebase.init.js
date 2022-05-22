// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6wlGUTFHTOADLhSoTRoHksHVhV4_zVYE",
    authDomain: "pc-worlds.firebaseapp.com",
    projectId: "pc-worlds",
    storageBucket: "pc-worlds.appspot.com",
    messagingSenderId: "345835167187",
    appId: "1:345835167187:web:42016d0a2c0fa4d87e6326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;