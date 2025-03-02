import { setupLanguageSwitcher } from './components/languageSwitcher.js';
import { setupCoffeeMenu } from './components/coffeeMenu.js';
import { setupCart } from './components/cart.js';
import { translations } from './data/translations.js';

// Initialize the app with default language
let currentLanguage = 'en';
document.documentElement.lang = currentLanguage;

// Initialize components
setupLanguageSwitcher(currentLanguage, updateLanguage);
setupCoffeeMenu();
setupCart();

// Function to update language throughout the app
function updateLanguage(lang) {
  currentLanguage = lang;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('.translate').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update direction for Arabic
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Dispatch a custom event for components to listen for language changes
  const languageChangedEvent = new CustomEvent('languageChanged', {
    detail: { language: lang }
  });
  document.dispatchEvent(languageChangedEvent);
}
