import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPBVvo7xXx0VOhok58NTdGlIHFw2OPYso",
    authDomain: "crown-nt.firebaseapp.com",
    databaseURL: "https://crown-nt.firebaseio.com",
    projectId: "crown-nt",
    storageBucket: "crown-nt.appspot.com",
    messagingSenderId: "1022610533543",
    appId: "1:1022610533543:web:a1c3946b6b3e8936a5bf82",
    measurementId: "G-8YEDV3NYFG"
}

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
          await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(error);
        }
    }
    return userRef;
    
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
