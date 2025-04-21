import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQK6Ddi_tjRXK781CeHHbLDfBnnPE1DVE",
  authDomain: "clearmoney-ba70b.firebaseapp.com",
  projectId: "clearmoney-ba70b",
  storageBucket: "clearmoney-ba70b.appspot.com",
  messagingSenderId: "686314162754",
  appId: "1:686314162754:web:c772cb756682cca15e7bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app; 