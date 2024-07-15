/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

import Book from './book.js';

class BookManager {
  constructor() {
    // Load books from localStorage, if available
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookListElement = document.getElementById('book-list'); // Reference to the HTML element where the book list will be displayed
    this.dialogueBox = document.getElementById('dialogue-box'); // Reference to the dialogue box for empty list message
    if (this.bookListElement) this.render(); // Initial render to display any saved books
  }

  // Method to add a book to the list and render the updated list
  addBook = (book) => {
    this.books.push(book); // Add the new book to the books array
    this.saveBooks();
    this.render(); // Call render to update the book list display
  }

  // Method to remove a book from the list by its index and render the updated list
  removeBook = (index) => {
    this.books.splice(index, 1); // Remove the book at the specified index from the books array
    this.saveBooks();
    this.render(); // Call render to update the book list display
  }

  saveBooks = () => {
    // Save the current list of books to localStorage
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Method to render the book list
  render = () => {
    if (!this.bookListElement) return; // Return if there is no book list element
    this.bookListElement.innerHTML = ''; // Clear the current content of the book list element

    // Display message if no books are available
    if (this.books.length === 0) {
      this.dialogueBox.style.display = 'block';
    } else {
      this.dialogueBox.style.display = 'none';

      // Create a single outer container with a border
      const outerContainer = document.createElement('div');
      outerContainer.className = 'outer-container';

      // Loop through the books array using a for loop
      for (let index = 0; index < this.books.length; index += 1) {
        const book = this.books[index]; // Get the current book
        const bookItem = document.createElement('div'); // Create a new div element for the book item
        bookItem.className = 'book-item'; // Set the class for styling
        bookItem.style.backgroundColor = index % 2 === 0 ? 'rgb(203 198 188)' : 'white'; // Apply alternating background colors
        bookItem.innerHTML = `
          <span>${book.title} by: ${book.author}</span>
          <button onclick="bookManager.removeBook(${index})">Remove</button>
        `; // Set the inner HTML to display the book's title, author, and a remove button

        outerContainer.appendChild(bookItem); // Append the book item to the outer container
      }

      this.bookListElement.appendChild(outerContainer); // Apend d outa contana to d buk lst elemnt
    }
  }
}

export default BookManager;
