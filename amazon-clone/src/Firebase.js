import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkYajFmUFWKiZhdP72HavqBot_SAPStjc",
    authDomain: "clone-a7eaf.firebaseapp.com",
    projectId: "clone-a7eaf",
    storageBucket: "clone-a7eaf.appspot.com",
    messagingSenderId: "293872483196",
    appId: "1:293872483196:web:8f6722f548c07c827582f9",
    measurementId: "G-0ZR8EZNXM3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };