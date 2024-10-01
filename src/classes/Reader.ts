import { Book } from './Book';

export class Reader {
    protected name: string;  // Changed from private to protected

    constructor(name: string) {
        this.name = name;
    }

    // Method for checking out a book (communicating with librarian later)
    public checkOutBook(book: Book): void {
        if (book.isAvailable()) {
            console.log(`${this.name} borrowed "${book.getDetails()}".`);
        } else {
            console.log(`Sorry, ${this.name}. The book "${book.getDetails()}" is not available.`);
        }
    }
}
