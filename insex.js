
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.getElementById('movingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Request Sent Successfully!');
    this.reset();
});

