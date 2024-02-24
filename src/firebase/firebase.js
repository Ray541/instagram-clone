import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPhe3F1RNFzp_XFwUK_J-kYJmOeXtLP9I",
  authDomain: "insta-clone-b1357.firebaseapp.com",
  projectId: "insta-clone-b1357",
  storageBucket: "insta-clone-b1357.appspot.com",
  messagingSenderId: "322853329298",
  appId: "1:322853329298:web:b54e307a8fcf897d9a894b",
  measurementId: "G-CPVZ0EFJ0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
