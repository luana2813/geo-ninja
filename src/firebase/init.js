import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWfpGgs-MP07UWUKmwPe1kN8qxKg8RIUM",
    authDomain: "geo-ninja-ceda7.firebaseapp.com",
    databaseURL: "https://geo-ninja-ceda7.firebaseio.com",
    projectId: "geo-ninja-ceda7",
    storageBucket: "geo-ninja-ceda7.appspot.com",
    messagingSenderId: "854335846023",
    appId: "1:854335846023:web:d48e5a143baa2c58dbea22",
    measurementId: "G-BTX1C6GKYQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()