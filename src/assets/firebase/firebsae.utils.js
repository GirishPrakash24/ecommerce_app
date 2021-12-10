import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD9nOAHBpFJg2d-ObnzpPpjfmbgYyx-NFc",

    authDomain: "ecommerceapp-816fe.firebaseapp.com",

    projectId: "ecommerceapp-816fe",

    storageBucket: "ecommerceapp-816fe.appspot.com",

    messagingSenderId: "1727516429",

    appId: "1:1727516429:web:0044b2f34d63705403aa44",

    measurementId: "${config.measurementId}"


};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithGoogle(provider);

export default firebase;