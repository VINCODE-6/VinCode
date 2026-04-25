// Mobile Menu Toggle
const menuToggle = document.querySelector('#menu-toggle');
const navUl = document.querySelector('#navbar ul');

if (menuToggle && navUl) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
}

// Close menu on nav link click
document.querySelectorAll('#navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navUl) navUl.classList.remove('show');
  });
});

// Header scroll shadow
const header = document.getElementById('main-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 4px 32px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-row, .portfolio-case, .testimonial-card, .value-item, .detail-grid, .contact-detail, .ai-feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Hero card bar animation on load
const bars = document.querySelectorAll('.card-bar-fill');
bars.forEach(bar => {
  bar.style.width = '0';
  setTimeout(() => {
    bar.style.transition = 'width 1.6s ease';
    bar.style.width = bar.style.width || '82%';
  }, 800);
});

// Contact form basic validation
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    if (!contactForm.checkValidity()) {
      e.preventDefault();
      alert('Please fill out all required fields.');
    }
  });
}

console.log('VINCODE loaded ✓');
