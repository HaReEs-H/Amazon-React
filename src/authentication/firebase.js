import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDnibvAifxP8OYPNacJ0YcZWz4YfFm49-c',
  authDomain: 'eshop-d935a.firebaseapp.com',
  projectId: 'eshop-d935a',
  storageBucket: 'eshop-d935a.appspot.com',
  messagingSenderId: '1080317272666',
  appId: '1:1080317272666:web:cbcf2ebeb5a78ad3ad6e63',
  measurementId: 'G-3VNV64W05K',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore(firebaseApp)

const auth = firebase.auth()

export { db, auth }
