import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDENBe_5V4y-MreUuyYoLPjL-UxHyvRMhk",
    authDomain: "reactjs-scirillano.firebaseapp.com",
    projectId: "reactjs-scirillano",
    storageBucket: "reactjs-scirillano.appspot.com",
    messagingSenderId: "746944295571",
    appId: "1:746944295571:web:c16e128cadaf0d7fa45366"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
