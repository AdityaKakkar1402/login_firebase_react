import firebase from "firebase/app";
require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyDpWpYamQDidtBJ9PrdhCYrhvFGL47DC-U",
    authDomain: "internship-61ae8.firebaseapp.com",
    projectId: "internship-61ae8",
    storageBucket: "internship-61ae8.appspot.com",
    messagingSenderId: "690884980616",
    appId: "1:690884980616:web:cd61b32017eb2bdcc6143d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;