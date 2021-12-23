// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBuqDLYL3LU-D2Zi3wD4ONpf4JMv5EKna8",
    authDomain: "facebook-clone-ea94f.firebaseapp.com",
    projectId: "facebook-clone-ea94f",
    storageBucket: "facebook-clone-ea94f.appspot.com",
    messagingSenderId: "253246124252",
    appId: "1:253246124252:web:34af2f34afc0daa77f0419",
    measurementId: "G-KF8GK117K1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;