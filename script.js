// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

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