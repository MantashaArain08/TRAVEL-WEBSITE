// Scroll to section function
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.destination-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const image = card.getAttribute('data-image');
    const description = card.getAttribute('data-description');

    modalImage.src = image;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // disable background scroll
  });
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // re-enable scroll
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Newsletter form functionality (with alert)
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (email) {
    alert(`✅ Thank you for subscribing with ${email}! You'll receive travel updates soon.`);
    newsletterForm.reset();
  }
});

// Contact form functionality (with alert)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("✅ Your message has been sent successfully!");
  contactForm.reset();
});
