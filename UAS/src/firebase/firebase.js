import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBodsEs6LOG2JuCI6hbKr9WDtMDychZ5Z8",
  authDomain: "minggukeduabelas-pbf.firebaseapp.com",
  databaseURL: "https://minggukeduabelas-pbf.firebaseio.com",
  projectId: "minggukeduabelas-pbf",
  storageBucket: "minggukeduabelas-pbf.appspot.com",
  messagingSenderId: "166929797429",
  appId: "1:166929797429:web:67d80e39d63aad28463c7c"
  };
  class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
}
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
