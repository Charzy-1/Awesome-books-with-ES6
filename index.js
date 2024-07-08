import { BookManager } from './modules/bookManager.js';
import { setupNavigation } from './modules/navigation.js';
import { setupBookForm } from './modules/domElements.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookManager = new BookManager();
  setupNavigation();
  setupBookForm(bookManager);

  // Display current date using JavaScript Date object
  const dateElement = document.getElementById('current-date');
  const now = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  dateElement.textContent = `${now}`;
});
