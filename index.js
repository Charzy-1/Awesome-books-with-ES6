import './modules/domManipulation.js';
import BookManager from './modules/bookManager.js';
import './modules/formHandler.js';
import displayDateTime from './modules/dateTime.js';

const bookManager = new BookManager();
window.bookManager = bookManager; // Make bookManager globally accessible

// Initialize the date and time display
displayDateTime();
