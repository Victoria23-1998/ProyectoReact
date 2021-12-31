// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtvF9G7B4OBIO2o9RHLRv4HeHW5hDoto0",
    authDomain: "ecommercetravel-dda7d.firebaseapp.com",
    projectId: "ecommercetravel-dda7d",
    storageBucket: "ecommercetravel-dda7d.appspot.com",
    messagingSenderId: "846061295147",
    appId: "1:846061295147:web:beb271cef592a9dabdfc6e",
    measurementId: "G-L1MV2V27TM"
  };
  

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){
    return firebase.firestore(app)
}