import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAz-I8bgEyQ_ppNhHPTkWL15h2qL4YU2lo",
    authDomain: "paticient-tracker.firebaseapp.com",
    databaseURL: "https://paticient-tracker.firebaseio.com",
    projectId: "paticient-tracker",
    storageBucket: "paticient-tracker.appspot.com",
    messagingSenderId: "29692796199"
  };
   firebase.initializeApp(config)
export default firebase;