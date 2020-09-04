const firebase = require('firebase')

var firebaseConfig = {
  apiKey: "AIzaSyB4dJLSIERaKmISVgy0EbikYQYaB7ZFlCc",
  authDomain: "cv-alejandro-76ccb.firebaseapp.com",
  databaseURL: "https://cv-alejandro-76ccb.firebaseio.com",
  projectId: "cv-alejandro-76ccb",
  storageBucket: "cv-alejandro-76ccb.appspot.com",
  messagingSenderId: "87900818621",
  appId: "1:87900818621:web:caf2b77a43328f1fe3fbd4",
  measurementId: "G-JHNL41QMRF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { firebase };
