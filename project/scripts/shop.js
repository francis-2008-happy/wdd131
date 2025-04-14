// Initialize Shop Page
document.addEventListener('DOMContentLoaded', () => {
  renderAllProducts();
  setupFilters();
});

// Render All Products
function renderAllProducts() {
  const allProductsContainer = document.getElementById('all-products');
  allProductsContainer.innerHTML = products.map(product => `
      <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-img lazy-load" data-src="${product.image}">
          <div class="product-info">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-price">₦${product.price.toLocaleString()}</p>
              <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)} (${product.reviews})</div>
              <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
      </div>
  `).join('');
}

// Setup Filter Functionality
function setupFilters() {
  const hairTypeFilter = document.getElementById('hair-type');
  const hairLengthFilter = document.getElementById('hair-length');
  const priceRangeFilter = document.getElementById('price-range');
  
  [hairTypeFilter, hairLengthFilter, priceRangeFilter].forEach(filter => {
      filter.addEventListener('change', applyFilters);
  });
}

// Apply All Active Filters
function applyFilters() {
  const typeValue = document.getElementById('hair-type').value;
  const lengthValue = document.getElementById('hair-length').value;
  const priceValue = document.getElementById('price-range').value;
  
  const filteredProducts = products.filter(product => {
      // Type filter
      if (typeValue !== 'all' && product.type !== typeValue) return false;
      
      // Length filter
      if (lengthValue !== 'all' && product.length !== lengthValue) return false;
      
      // Price filter - compare numbers directly (no currency symbol)
      if (priceValue !== 'all' && product.price > parseInt(priceValue)) return false;
      
      return true;
  });
  
  renderFilteredProducts(filteredProducts);
}

// Render Filtered Products
function renderFilteredProducts(filteredProducts) {
  const allProductsContainer = document.getElementById('all-products');
  
  if (filteredProducts.length === 0) {
      allProductsContainer.innerHTML = `
          <div class="no-results">
              <p>No products match your filters. Try adjusting your criteria.</p>
          </div>
      `;
      return;
  }
  
  allProductsContainer.innerHTML = filteredProducts.map(product => `
      <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <div class="product-info">
              <h3 class="product-title">${product.name}</h3>
              <p class="product-price">₦${product.price.toLocaleString()}</p>
              <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)} (${product.reviews})</div>
              <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
      </div>
  `).join('');
}