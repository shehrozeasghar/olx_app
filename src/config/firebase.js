import * as firebase from 'firebase/app'
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDNum19DOYm8YNAKeP1A0Nuovvh9yqXQck",
    authDomain: "firstcal.firebaseapp.com",
    databaseURL: "https://firstcal.firebaseio.com",
    projectId: "firstcal",
    storageBucket: "firstcal.appspot.com",
    messagingSenderId: "299002174699",
    appId: "1:299002174699:web:93666aa2fa245d5740b2ae",
    measurementId: "G-D15DW8P8LT"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
