// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // If the mobile menu is open, close it before scrolling
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission handler
const form = document.querySelector('#contact form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here,
    // for example, by sending the data to a server.
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
});

// ===================================
// NEW: JavaScript for Hamburger Menu
// ===================================
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const hamburgerIcon = document.querySelector('.hamburger-menu i');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the menu
    navLinks.classList.toggle('active');

    // Toggle the icon between bars and an 'X'
    if (navLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});