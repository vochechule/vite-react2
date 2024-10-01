import { Book } from './Book';
import { Reader } from './Reader';

export class Librarian extends Reader {
    constructor(name: string) {
        super(name);
    }

    // Method to return a book
    public returnBook(book: Book): void {
        book.setAvailable(true);
        console.log(`${this.name} has returned "${book.getDetails()}".`);  // Now 'name' is accessible
    }

    // Method to check out a book (overrides Reader's method)
    public checkOutBook(book: Book): void {
        if (book.isAvailable()) {
            book.setAvailable(false);  // Only librarian can change availability
            console.log(`${this.name} has checked out "${book.getDetails()}".`);
        } else {
            console.log(`The book "${book.getDetails()}" is already checked out.`);
        }
    }
}
