import {BookManager } from './modules/bookManager.js';
import {setupNavigation} from './modules/navigation.js';
import {setupBookForm} from './modules/domElements.js';


document.addEventListener('DOMContentLoaded', () => {
  const bookManager = new BookManager();
  setupNavigation();
  setupBookForm(bookManager);

  // Display current date
  const dateElement = document.getElementById('current-date');
  const now = DateTime.now().toLocaleString(DateTime.DATE_FULL);
  dateElement.textContent = `Today's date: ${now}`;

});
