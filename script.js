// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Formspree submission feedback
const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      statusDiv.textContent = 'Thank you! Your message has been sent.';
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          statusDiv.textContent = data["errors"].map(error => error["message"]).join(", ");
        } else {
          statusDiv.textContent = 'Oops! There was a problem submitting your form';
        }
      });
    }
  })
  .catch(error => {
    statusDiv.textContent = 'Oops! There was a problem submitting your form';
  });
});
