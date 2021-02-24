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

export const createUserProfile = async (userAuth, additionaldata) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists)
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionaldata
      })
    }
    catch(error){
      console.log("error finding user",error.message)
    }
  }

  return userRef;
}

export const pushToServer = async (collection, objectsToAdd) => {
    const collectionRef = firestore.collection(collection);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const docRef = collectionRef.doc();
        batch.set(docRef,obj)
    });

    return await batch.commit();
}

export const pullFromServer =  (collections) => {
  const newCollection = collections.docs.map(doc => {
    const {title,items} = doc.data()
    
    return{
      route: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return newCollection.reduce((total, collection) => 
   {
     total[collection.title.toLowerCase()]=collection;
     return total;
   }
  ,{})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged(userAuth => {
      unsub();
      resolve(userAuth)
    },reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;