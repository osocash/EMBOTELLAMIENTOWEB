
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"

import { auth } from "./firebase.js";

import { showMessage } from "./showMessage.js";

const signupform = document.querySelector('#signup-form')

signupform.addEventListener('submit', async (e)=>{
    e.preventDefault()

   const email = signupform['signup-email'].value
   const password = signupform['signup-password'].value
   
   console.log(email);
   console.log(password);

   try{
    const userCredential= await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential);


    const signupmodal=document.querySelector("#CERRAR")
    const modal=bootstrap.Modal.getInstance(signupmodal);
    modal.hide();

    
  
    //signUpForm.reset();

    // show welcome message
    showMessage("Welcome  " + userCredential.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }
})