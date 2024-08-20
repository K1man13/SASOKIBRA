// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// Toggle mobile navigation
const nav = document.querySelector('nav ul');
const toggleNav = document.createElement('div');
toggleNav.className = 'toggle-nav';
toggleNav.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').prepend(toggleNav);

toggleNav.addEventListener('click', () => {
    nav.classList.toggle('open');
    const icon = toggleNav.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close the mobile nav on outside click
document.addEventListener('click', function(e) {
    if (!toggleNav.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggleNav.querySelector('i').classList.add('fa-bars');
        toggleNav.querySelector('i').classList.remove('fa-times');
    }
});

// Function to change header style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Load images with lazy loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img");
    lazyImages.forEach(img => {
        img.loading = "lazy";
    });
});