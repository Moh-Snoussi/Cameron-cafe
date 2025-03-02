import { getCoffeeData, getFilterTranslations } from '../data/coffeeData.js';

export function setupCoffeeMenu() {
  const menuContainer = document.getElementById('coffee-menu');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Get current language from HTML dir attribute or default to 'en'
  let currentLanguage = document.documentElement.lang || 'en';
  
  // Initial render with default language
  updateCoffeeMenu(currentLanguage);
  updateFilterButtons(currentLanguage);
  
  // Listen for language change events
  document.addEventListener('languageChanged', (event) => {
    currentLanguage = event.detail.language;
    updateCoffeeMenu(currentLanguage);
    updateFilterButtons(currentLanguage);
  });
  
  // Add event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      
      // Filter coffee items
      const filter = button.getAttribute('data-filter');
      filterCoffeeItems(filter, currentLanguage);
    });
  });
  
  // Function to update filter button text based on language
  function updateFilterButtons(language) {
    const translations = getFilterTranslations(language);
    
    filterButtons.forEach(button => {
      const filter = button.getAttribute('data-filter');
      if (translations[filter]) {
        button.textContent = translations[filter];
      }
    });
  }
  
  // Function to filter and render coffee items
  function filterCoffeeItems(filter, language) {
    const coffeeItems = getCoffeeData(language);
    const filteredItems = filter === 'all' 
      ? coffeeItems 
      : coffeeItems.filter(item => item.category === filter);
    
    renderCoffeeItems(filteredItems, language);
  }
  
  // Function to update the entire coffee menu for a new language
  function updateCoffeeMenu(language) {
    // Get the active filter
    const activeFilter = document.querySelector('.filter-btn.active');
    const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
    
    // Apply the current filter with the new language
    filterCoffeeItems(filter, language);
  }
  
  // Function to render coffee items
  function renderCoffeeItems(items, language) {
    menuContainer.innerHTML = '';
    
    // Check if we need RTL layout
    const isRTL = language === 'ar';
    
    items.forEach(coffee => {
      const coffeeItem = document.createElement('div');
      coffeeItem.className = 'coffee-item';
      coffeeItem.dir = isRTL ? 'rtl' : 'ltr';
      
      coffeeItem.innerHTML = `
        <div class="coffee-image">
          <img src="${coffee.image}" alt="${coffee.name}">
        </div>
        <div class="coffee-info">
          <h3>${coffee.name}</h3>
          <p class="coffee-origin">${coffee.origin}</p>
          <p class="coffee-description">${coffee.description}</p>
          <div class="coffee-details">
            <span class="coffee-price">$${coffee.price.toFixed(2)}</span>
            <button class="add-to-cart-btn" data-id="${coffee.id}">
              ${language === 'en' ? 'Add to Cart' : 
                language === 'th' ? 'เพิ่มลงตะกร้า' : 
                'أضف إلى السلة'}
            </button>
          </div>
        </div>
      `;
      
      menuContainer.appendChild(coffeeItem);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', () => {
        const coffeeId = parseInt(button.getAttribute('data-id'));
        const selectedCoffee = getCoffeeData(currentLanguage).find(coffee => coffee.id === coffeeId);
        
        // Create a custom event to add item to cart
        const addToCartEvent = new CustomEvent('addToCart', {
          detail: selectedCoffee
        });
        
        document.dispatchEvent(addToCartEvent);
      });
    });
  }
}