import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhn0i-UfPrzYX1H4Hd7tcNfAJeOmwAYIo",
  authDomain: "smart-cash-control.firebaseapp.com",
  projectId: "smart-cash-control",
  storageBucket: "smart-cash-control.appspot.com",
  messagingSenderId: "195390722937",
  appId: "1:195390722937:web:8ba963f670bc47275495a8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;