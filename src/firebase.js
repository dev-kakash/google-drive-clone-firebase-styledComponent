import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyASXW_sYL8hew4nf4AKBbga-ek9qTICLF0",
    authDomain: "drive-clone-a1717.firebaseapp.com",
    projectId: "drive-clone-a1717",
    storageBucket: "drive-clone-a1717.appspot.com",
    messagingSenderId: "1040919609822",
    appId: "1:1040919609822:web:b262fffeb80db987c39d4f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth,provider,db,storage }