// Firebase App (the core Firebase SDK) is always required
// and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyB71LK8t6JZAUupd42bp4AXUxYOSdexUF0",
  authDomain: "fir-1a50d.firebaseapp.com",
  databaseURL: "https://fir-1a50d-default-rtdb.firebaseio.com",
  projectId: "fir-1a50d",
  storageBucket: "fir-1a50d.appspot.com",
  messagingSenderId: "974616580560",
  appId: "1:974616580560:web:b62946571ce98ddffc29d5",
  measurementId: "G-ZF4YQ690BT",
}

firebase.initializeApp(firebaseConfig);

export default firebase;