import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDetrH9_bF7dDUeM6DyjhmhxtiYI5rgN9E",
    authDomain: "wapda-authentication.firebaseapp.com",
    projectId: "wapda-authentication",
    storageBucket: "wapda-authentication.appspot.com",
    messagingSenderId: "445361597712",
    appId: "1:445361597712:web:dfcec690e29a10b3850995",
    measurementId: "G-TQKQCVV945"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);