import Book from './book.js';
import BookManager from './bookManager.js';

const bookManager = new BookManager();

const bookForm = document.getElementById('book-form');
if (bookForm) {
  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const newBook = new Book(title, author);
    bookManager.addBook(newBook);
    bookForm.reset();
  });
}

export default bookForm;
