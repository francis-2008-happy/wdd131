// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('nav ul');
const featuredProductsContainer = document.getElementById('featured-products');
const testimonialCarousel = document.querySelector('.testimonial-carousel');

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Brazilian 24\" Lace Frontal",
    price: 32000,
    image: "images/wig1.jpg",
    rating: 4,
    reviews: 24,
    length: "24",
    type: "frontal"
  },
  {
    id: 2,
    name: "Peruvian Curly Bundle",
    price: 19000,
    image: "images/wig2.jpg",
    rating: 5,
    reviews: 12,
    length: "22",
    type: "bundle"
  },
  {
    id: 3,
    name: "Malaysian Straight Wig",
    price: 73000,
    image: "images/wig3.jpg",
    rating: 4,
    reviews: 18,
    length: "20",
    type: "wig"
  },
  {
    id: 4,
    name: "Brazilain Straight Wig",
    price: 25000,
    image: "images/wig4.jpg",
    rating: 4,
    reviews: 18,
    length: "20",
    type: "wig"
  },
  {
    id: 5,
    name: "Frontal ",
    price: 45000,
    image: "images/wig5.jpg",
    rating: 4,
    reviews: 18,
    length: "20",
    type: "wig"
  },
  {
    id: 6,
    name: "boob curry Wig",
    price: 38000,
    image: "images/wig6.jpg",
    rating: 4,
    reviews: 18,
    length: "20",
    type: "wig"
  }

];

// Sample Testimonial Data
const testimonials = [
  {
    text: "Tricia's Hairline changed my life! The Brazilian frontal looks so natural and has lasted me 6 months with proper care.",
    author: "Jessica M."
  },
  {
    text: "I was nervous about my first wig purchase, but the team walked me through everything. Couldn't be happier!",
    author: "Danielle R."
  },
  {
    text: "The quality is unmatched. I've tried many brands but keep coming back to Tricia's Hairline.",
    author: "Taylor K."
  }
];

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Render Featured Products
function renderFeaturedProducts() {
  featuredProductsContainer.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img lazy-load" data-src="${product.image}">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">₦${product.price}</p>
        <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)} (${product.reviews})</div>
        <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// Render Testimonials
function renderTestimonials() {
  testimonialCarousel.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial">
      <p class="testimonial-text">"${testimonial.text}"</p>
      <p class="testimonial-author">- ${testimonial.author}</p>
    </div>
  `).join('');
}

// Initialize Lazy Loading
function initLazyLoad() {
  const lazyImages = document.querySelectorAll('.lazy-load');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy-load');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderTestimonials();
  initLazyLoad();
  
  // Initialize cart count
  updateCartCount();
});



// Get the current year for the copyright
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Format the last modified date
const formattedLastModified = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

// Insert the current year into the copyright span
document.getElementById('copyright-year').textContent = currentYear;

// Insert the last modified date into the last modified span
document.getElementById('last-modified').textContent = formattedLastModified;