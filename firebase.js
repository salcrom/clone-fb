// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyA0p9UAoJFZK4RCpQLtmiixoWOhO7L9N-I",
    authDomain: "clone-facebook-95da2.firebaseapp.com",
    projectId: "clone-facebook-95da2",
    storageBucket: "clone-facebook-95da2.appspot.com",
    messagingSenderId: "633498690304",
    appId: "1:633498690304:web:a223eadd1c378f8c4249e5",
    measurementId: "G-SV9FMF5J9R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export { auth, db, storage };
