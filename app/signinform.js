import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"

import { auth } from "./firebase.js";

import { showMessage } from "./showMessage.js";

const signinform = document.querySelector('#login-form');

signinform.addEventListener('submit', async e =>{
    e.preventDefault();
    const email = signinform['login-email'].value;
    const password = signinform['login-password'].value;

    console.log(email);
    console.log(password);
    
       try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
    
    
        const signinmodal=document.querySelector("#INICIO")
        const modal=bootstrap.Modal.getInstance(signinmodal);
        modal.hide();

        showMessage("Welcome  " + userCredential.user.email);
        
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
          showMessage("Wrong password", "error")
        } else if (error.code === 'auth/user-not-found') {
          showMessage("User not found", "error")
        } else {
          showMessage("Something went wrong", "error")
        }
      }
})