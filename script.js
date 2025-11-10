// Smooth scroll and simple form feedback
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Fake contact form message (no backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent =
    'Thank you for your message! We will contact you soon.';
  this.reset();
});
