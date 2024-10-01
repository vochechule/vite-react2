import { Book } from './Book';
import { Reader } from './Reader';
import { Librarian } from './Librarian';
import { Library } from './Library';

// Create a new library instance
const library = new Library();

// Create some books
const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Brave New World", "Aldous Huxley");
library.addBook(book1);
library.addBook(book2);

// Create a reader and a librarian
const reader = new Reader("Alice");
const librarian = new Librarian("Bob");

// Reader tries to check out a book (but doesn't have permission)
reader.checkOutBook(book1);

// Librarian checks out the book for the reader
librarian.checkOutBook(book1);

// Librarian returns the book
librarian.returnBook(book1);

// Show available books in the library
library.showAvailableBooks();
