// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Contact form handling
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();

//         // Get form data
//         const formData = new FormData(this);
//         const data = Object.fromEntries(formData);

//         // Simple validation
//         if (!data.name || !data.email || !data.subject || !data.message) {
//             alert('Please fill in all fields.');
//             return;
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(data.email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }

//         // Simulate form submission (in a real app, this would send to a server)
//         alert('Thank you for your message! I\'ll get back to you soon.');

//         // Reset form
//         this.reset();
//     });
// }

// // Add some interactive effects
// document.addEventListener('DOMContentLoaded', function() {
//     // Add fade-in animation to project cards
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);

//     // Observe project cards
//     document.querySelectorAll('.project-card').forEach(card => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(20px)';
//         card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(card);
//     });

//     // Add hover effect to skill items
//     document.querySelectorAll('.skill-item').forEach(item => {
//         item.addEventListener('mouseenter', function() {
//             this.style.transform = 'scale(1.05)';
//         });

//         item.addEventListener('mouseleave', function() {
//             this.style.transform = 'scale(1)';
//         });
//     });
// });

// // Mobile navigation toggle (if needed in the future)
// function toggleMobileNav() {
//     const navLinks = document.querySelector('.nav-links');
//     if (navLinks) {
//         navLinks.classList.toggle('active');
//     }
// }