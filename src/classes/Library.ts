import { Book } from './Book';

export class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showAvailableBooks(): void {
        console.log("Available books:");
        this.books.forEach(book => {
            if (book.isAvailable()) {
                console.log(book.getDetails());
            }
        });
    }
}
