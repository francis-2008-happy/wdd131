// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('consultation-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }
  });
  
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value,
      date: new Date().toISOString()
    };
    
    // Save to localStorage
    saveFormSubmission(formData);
    
    // Show success message
    showFormSuccess();
    
    // Reset form
    e.target.reset();
  }
  
  function saveFormSubmission(formData) {
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
  }
  
  function showFormSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <p>Thank you for your message! We'll get back to you soon.</p>
    `;
    
    const form = document.getElementById('consultation-form');
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    setTimeout(() => {
      successMessage.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      successMessage.classList.remove('show');
      setTimeout(() => {
        successMessage.remove();
      }, 300);
    }, 5000);
  }