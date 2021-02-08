import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB5DQFja8G4xISguhpp8XM9Tfgzvpwsb8s",
    authDomain: "tryncart.firebaseapp.com",
    projectId: "tryncart",
    storageBucket: "tryncart.appspot.com",
    messagingSenderId: "825648770455",
    appId: "1:825648770455:web:35e38b5aedc50f087068d2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;