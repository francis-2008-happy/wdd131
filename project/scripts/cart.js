// Cart Functions
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  
  if (product) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    
    saveCart();
    updateCartCount();
    showCartNotification();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
}

function updateQuantity(productId, newQuantity) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartCount();
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = count;
}

function showCartNotification() {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Event Delegation for Add to Cart Buttons
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    addToCart(productId);
  }
});