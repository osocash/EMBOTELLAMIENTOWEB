import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
const pesta = document.querySelectorAll(".Vdashboard, .Vcontrol");
const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
  pesta.forEach((link) => (link.classList.remove("active")));

});