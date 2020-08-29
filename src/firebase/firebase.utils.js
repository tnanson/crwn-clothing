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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
