const dashboard = document.querySelector('.Vdashboard');
const control = document.querySelector('.Vcontrol');
const contcontrol = document.querySelectorAll('.control');
const contdashboard = document.querySelectorAll('.dashboard');

dashboard.addEventListener('click', () => {
    control.classList.remove('active');
    dashboard.classList.add('active');
    contcontrol.forEach((link) => (link.style.display = "none"));
    contdashboard.forEach((link) => (link.style.display = "block"));
});

control.addEventListener('click', () => {
    dashboard.classList.remove('active');
    control.classList.add('active');
    contcontrol.forEach((link) => (link.style.display = "block"));
    contdashboard.forEach((link) => (link.style.display = "none"));
});




