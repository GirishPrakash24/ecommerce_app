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

    measurementId: "G-DH2JE9MXNC"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;