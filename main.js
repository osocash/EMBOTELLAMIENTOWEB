import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { info } from "./app/info.js"
import { getDocs, collection  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"


import './app/signupform.js'
import './app/signinform.js'
import './app/googlelogin.js'

import './app/vista.js'
import './app/logout.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querysnapshot=await getDocs(collection(db, 'lotes_fecha'));
      info(querysnapshot.docs);
    }else {
      
     info([]);
    }
    loginCheck(user);
    
  });