import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#google-login");

googleButton.addEventListener("click", async (e) => { 
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
    // Close the login modal
        const signinmodal=document.querySelector("#INICIO")
        const modal=bootstrap.Modal.getInstance(signinmodal);
        modal.hide();

    // show welcome message
    showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user')
    {
        showMessage("dont close", "error")
    }
    console.log(error);
  }
});