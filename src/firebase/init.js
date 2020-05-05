import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGss6x--rw9yV7Of5_NQ4qdxJkgF9IS5k",
  authDomain: "geo-mohit.firebaseapp.com",
  databaseURL: "https://geo-mohit.firebaseio.com",
  projectId: "geo-mohit",
  storageBucket: "geo-mohit.appspot.com",
  messagingSenderId: "263810903685",
  appId: "1:263810903685:web:3c43e31451f6ac859f43ec"
};
// Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()