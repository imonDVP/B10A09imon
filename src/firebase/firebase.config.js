// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBNw45OsuKyAgcpLDi-xL2rgjX09H4nic",
  authDomain: "tooth-treatment.firebaseapp.com",
  projectId: "tooth-treatment",
  storageBucket: "tooth-treatment.firebasestorage.app",
  messagingSenderId: "411637018918",
  appId: "1:411637018918:web:65297d1c1f3cd4d60511e7"
};
// Delete any existing app (useful for hot reload scenarios)
// if (getApps().length) {
//   deleteApp(getApps()[0]);
// }


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ----OR-----
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;