import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAXa3Ags6buTVohsFnz86Nq8OThjhX27I",
    authDomain: "react-ecommerce-c7233.firebaseapp.com",
    databaseURL: "https://react-ecommerce-c7233.firebaseio.com",
    projectId: "react-ecommerce-c7233",
    storageBucket: "react-ecommerce-c7233.appspot.com",
    messagingSenderId: "608318279213",
    appId: "1:608318279213:web:54e2d4b00ace73e65ef2a4",
    measurementId: "G-R33WKWQJ03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
