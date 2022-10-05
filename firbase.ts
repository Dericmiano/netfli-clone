// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDx2H0z3EAbSQOWWGIFqLoaZXQeZ4rlwHQ",
  
    authDomain: "netflix-clone-9618b.firebaseapp.com",
  
    projectId: "netflix-clone-9618b",
  
    storageBucket: "netflix-clone-9618b.appspot.com",
  
    messagingSenderId: "430102594802",
  
    appId: "1:430102594802:web:2ddb28f8f47d6dca1dfc6b",
  
    measurementId: "G-8LYFRKDG0S"
  
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
