const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const pesta = document.querySelectorAll(".Vdashboard, .Vcontrol");
const contdashboard = document.querySelectorAll('.dashboard');

export const loginCheck = (user) => {
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
    pesta.forEach((link) => (link.style.display = "block"));
    contdashboard.forEach((link) => (link.style.display = "none"))
    
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
    pesta.forEach((link) => (link.style.display = "none"));
    contdashboard.forEach((link) => (link.style.display = "none"))
  }
};