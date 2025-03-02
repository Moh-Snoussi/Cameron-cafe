export function setupCart() {
  let cartItems = [];
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  // Get current language
  let currentLanguage = document.documentElement.lang || 'en';
  
  // Listen for language change events
  document.addEventListener('languageChanged', (event) => {
    currentLanguage = event.detail.language;
    updateCart(); // Update cart display with new language
  });
  
  // Listen for add to cart events
  document.addEventListener('addToCart', (event) => {
    const newItem = event.detail;
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);
    
    if (existingItemIndex !== -1) {
      // Increment quantity if item already exists
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item with quantity 1
      cartItems.push({
        ...newItem,
        quantity: 1
      });
    }
    
    updateCart();
  });
  
  // Function to update cart display
  function updateCart() {
    // Clear cart items container
    cartItemsContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
      const emptyText = currentLanguage === 'en' ? 'Your cart is empty' : 
                        currentLanguage === 'th' ? 'ตะกร้าของคุณว่างเปล่า' : 
                        'سلة التسوق فارغة';
      
      cartItemsContainer.innerHTML = `<p class="empty-cart">${emptyText}</p>`;
      cartTotalAmount.textContent = '$0.00';
      return;
    }
    
    // Calculate total
    let total = 0;
    
    // Add each item to the cart
    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
      
      // Translate quantity text
      const quantityText = currentLanguage === 'en' ? 'x' : 
                          currentLanguage === 'th' ? 'x' : 
                          'x';
      
      cartItemElement.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)} ${quantityText} ${item.quantity}</p>
        </div>
        <div class="cart-item-actions">
          <button class="quantity-btn decrease" data-id="${item.id}">-</button>
          <span class="item-quantity">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">+</button>
          <button class="remove-btn" data-id="${item.id}">×</button>
        </div>
      `;
      
      cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Update total amount with currency symbol based on language
    // For simplicity, we'll keep using $ for all languages
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = parseInt(button.getAttribute('data-id'));
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
          if (cartItems[itemIndex].quantity > 1) {
            cartItems[itemIndex].quantity -= 1;
          } else {
            cartItems.splice(itemIndex, 1);
          }
          updateCart();
        }
      });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = parseInt(button.getAttribute('data-id'));
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        
        if (itemIndex !== -1) {
          cartItems[itemIndex].quantity += 1;
          updateCart();
        }
      });
    });
    
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = parseInt(button.getAttribute('data-id'));
        cartItems = cartItems.filter(item => item.id !== itemId);
        updateCart();
      });
    });
  }
  
  // Initialize empty cart
  updateCart();
  
  // Add event listener to checkout button
  checkoutBtn.addEventListener('click', () => {
    if (cartItems.length > 0) {
      // Get checkout message based on language
      const checkoutMessage = currentLanguage === 'en' ? 
        `Proceeding to checkout with ${cartItems.length} items` : 
        currentLanguage === 'th' ? 
        `กำลังดำเนินการชำระเงินด้วยสินค้า ${cartItems.length} รายการ` : 
        `جارٍ المتابعة إلى الدفع مع ${cartItems.length} عناصر`;
      
      // In a real application, this would send the cart data to your checkout endpoint
      alert(checkoutMessage);
      
      // For demo purposes, clear the cart after checkout
      cartItems = [];
      updateCart();
    }
  });
}