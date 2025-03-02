export function setupLanguageSwitcher(initialLanguage, updateCallback) {
  // Set initial language
  const flagButtons = document.querySelectorAll('.flag-btn');
  
  // Set active flag based on initial language
  flagButtons.forEach(button => {
    if (button.getAttribute('data-lang') === initialLanguage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  
  // Add event listeners to flag buttons
  flagButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      flagButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get language from data attribute
      const lang = button.getAttribute('data-lang');
      
      // Call the update callback with the selected language
      updateCallback(lang);
    });
  });
}