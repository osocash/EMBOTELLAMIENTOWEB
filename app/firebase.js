
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
  import { getFirestore  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"
  //   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzpH-elnf3IOLT0tp-j-pvb5347V_C1ZA",
    authDomain: "autz-app.firebaseapp.com",
    projectId: "autz-app",
    storageBucket: "autz-app.firebasestorage.app",
    messagingSenderId: "548898294366",
    appId: "1:548898294366:web:3329cd512a7a0c7e6782cf",
    measurementId: "G-B04WCMWNZ2",
    databaseURL: "https://autz-app-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
