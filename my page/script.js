// Mobile Menu Logic
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple toggle visibility for demo purposes
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.backgroundColor = "white";
        navLinks.style.padding = "1rem";
    }
});

// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.background = "#fff";
    } else {
        navbar.style.padding = "20px 0";
    }
});