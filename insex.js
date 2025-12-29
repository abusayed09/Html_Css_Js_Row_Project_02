const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');


    if (navList.classList.contains('active')) {
        icon.className = 'fas fa-times'; 
    } else {
        icon.className = 'fas fa-bars';
    }
}); 

document.getElementById('movingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Request Sent Successfully!');
    this.reset();
});

