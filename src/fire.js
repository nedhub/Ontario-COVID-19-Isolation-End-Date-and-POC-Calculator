import firebase from 'firebase'
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBRRzaTRpnTDoXZYzMvR1WrjrZDcz3d_vY",
    authDomain: "login-56b9b.firebaseapp.com",
    projectId: "login-56b9b",
    storageBucket: "login-56b9b.appspot.com",
    messagingSenderId: "686448113792",
    appId: "1:686448113792:web:8ebbbcfdb290a4a1230e65"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();


export{auth, db};
// export default db;

