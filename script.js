
// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu nav ul li a');
  
  menuButton.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Property filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const propertyCards = document.querySelectorAll('.property-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter properties
      propertyCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Gallery modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close-modal');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').getAttribute('src');
      const imgAlt = this.querySelector('img').getAttribute('alt');
      
      modalImage.setAttribute('src', imgSrc);
      modalImage.setAttribute('alt', imgAlt);
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Close modal when clicking outside content
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      
      if (!name || !phone) {
        alert('Vui lòng nhập họ tên và số điện thoại');
        return;
      }
      
      // Here you would usually send the data to a server
      alert('Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong thời gian sớm nhất');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Set current year in footer
  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
