import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCHADXGjXV-FVBOxXZGLaAbedYwcIGbx84",
  authDomain: "grand-mark.firebaseapp.com",
  projectId: "grand-mark",
  storageBucket: "grand-mark.appspot.com",
  messagingSenderId: "577445045595",
  appId: "1:577445045595:web:c01d456af5d61fc6b1a67e",
  measurementId: "G-VYQ56P8NE8"
})

export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()