import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6HJ_r3qz1RJKPQDiK7I-a339A8mbzChk",
  authDomain: "chatgpclone.firebaseapp.com",
  projectId: "chatgpclone",
  storageBucket: "chatgpclone.appspot.com",
  messagingSenderId: "746225656666",
  appId: "1:746225656666:web:58c7fea3a102b181b40963"
};

// Initialize Firebase //singleton pattern codding
const app = getApps().length? getApp(): initializeApp(firebaseConfig)
const db= getFirestore(app)

export {db}