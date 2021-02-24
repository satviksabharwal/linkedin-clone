import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTqODGe8elqgtEOMXFV349sZUcv_HUpoU",
    authDomain: "linkedin-clone-3e5bd.firebaseapp.com",
    projectId: "linkedin-clone-3e5bd",
    storageBucket: "linkedin-clone-3e5bd.appspot.com",
    messagingSenderId: "1049092136173",
    appId: "1:1049092136173:web:886cd51015ad93054f80e4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};