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

// Display cart items
function renderCart() {
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn">Continue Shopping</a>
            </div>
        `;
        subtotalEl.textContent = '₦0.00';
        totalEl.textContent = '₦2,500.00';
        return;
    }

    let subtotal = 0;
    cartItemsEl.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase">+</button>
                    </div>
                </div>
                <button class="cart-item-remove">×</button>
            </div>
        `;
    }).join('');

    subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    totalEl.textContent = `₦${(subtotal + 2500).toLocaleString()}`;
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
    
    // Event delegation for cart controls
    document.addEventListener('click', (e) => {
        const cartItem = e.target.closest('.cart-item');
        if (!cartItem) return;
        
        const productId = parseInt(cartItem.dataset.id);
        
        // Remove button
        if (e.target.classList.contains('cart-item-remove')) {
            removeFromCart(productId);
            renderCart();
        }
        
        // Quantity buttons
        if (e.target.classList.contains('quantity-btn')) {
            const action = e.target.dataset.action;
            const quantityEl = cartItem.querySelector('.quantity-controls span');
            let quantity = parseInt(quantityEl.textContent);
            
            if (action === 'increase') {
                quantity++;
            } else if (action === 'decrease' && quantity > 1) {
                quantity--;
            }
            
            updateQuantity(productId, quantity);
            renderCart();
        }
    });
});