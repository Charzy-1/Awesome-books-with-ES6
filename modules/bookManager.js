import Book from './book.js';

class BookManager {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookListElement = document.getElementById('book-list');
    this.dialogueBox = document.getElementById('dialogue-box');
    if (this.bookListElement) {
      this.bookListElement.addEventListener('click', this.handleRemoveBook);
      this.render();
    }
  }

  addBook = (book) => {
    this.books.push(book);
    this.saveBooks();
    this.render();
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    this.saveBooks();
    this.render();
  };

  handleRemoveBook = (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.dataset.index) {
      this.removeBook(parseInt(event.target.dataset.index, 10));
    }
  };

  saveBooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  render = () => {
    if (!this.bookListElement) return;
    this.bookListElement.innerHTML = '';

    if (this.books.length === 0) {
      this.dialogueBox.style.display = 'block';
    } else {
      this.dialogueBox.style.display = 'none';

      const outerContainer = document.createElement('div');
      outerContainer.className = 'outer-container';

      this.books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.style.backgroundColor = index % 2 === 0 ? 'rgb(203 198 188)' : 'white';
        bookItem.innerHTML = `
          <span>${book.title} by: ${book.author}</span>
          <button data-index="${index}">Remove</button>
        `;

        outerContainer.appendChild(bookItem);
      });

      this.bookListElement.appendChild(outerContainer);
    }
  };
}

export default BookManager;
