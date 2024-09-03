
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,doc,updateDoc,deleteDoc,setDoc} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCmPHaD1WjsrYuhEbDugvGNUSG68vlosJI",
  authDomain: "iotcom31.firebaseapp.com",
  databaseURL: "https://iotcom31-default-rtdb.firebaseio.com",
  projectId: "iotcom31",
  storageBucket: "iotcom31.appspot.com",
  messagingSenderId: "424612877028",
  appId: "1:424612877028:web:23e4c0b5c6f1e85a70d2f1",
  measurementId: "G-SBJX676MXP"
};

  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
  const auth = getAuth(firebase);
  const realtime = getDatabase(firebase );
  export { auth, firestore,realtime };