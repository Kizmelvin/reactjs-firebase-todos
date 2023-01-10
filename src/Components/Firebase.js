import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCceIpy04qJp3zbobYqcV_EefHQ0U23J_o",
  authDomain: "todos-31072.firebaseapp.com",
  projectId: "todos-31072",
  storageBucket: "todos-31072.appspot.com",
  messagingSenderId: "494703082670",
  appId: "1:494703082670:web:7111cb07f533807ebe813f",
};
// Initialize Firebase and export it
const FireBase = firebase.initializeApp(firebaseConfig);
export default FireBase;

