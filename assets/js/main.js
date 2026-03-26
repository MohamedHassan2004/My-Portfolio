/* ═══════════════════════════════════════════
   MAIN.JS — Mohamed Hassan Portfolio
   Scroll animations, navbar, mobile menu
   ═══════════════════════════════════════════ */

// ─── Scroll Reveal (Intersection Observer) ───
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
});

// ─── Navbar Background on Scroll ───
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}, { passive: true });

// ─── Mobile Menu Toggle ───
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

mobileToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden', !menuOpen);

    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars', !menuOpen);
    icon.classList.toggle('fa-times', menuOpen);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.add('hidden');
        const icon = mobileToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ─── Active Nav Link Highlighting ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary-light');
                link.classList.add('text-gray-400');

                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-primary-light');
                    link.classList.remove('text-gray-400');
                }
            });
        }
    });
}, { passive: true });
