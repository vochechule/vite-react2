export class Book {
    private title: string;
    private author: string;
    private available: boolean;

    constructor(title: string, author: string, available: boolean = true) {
        this.title = title;
        this.author = author;
        this.available = available;
    }

    public isAvailable(): boolean {
        return this.available;
    }

    public setAvailable(status: boolean): void {
        this.available = status;
    }

    public getDetails(): string {
        return `${this.title} by ${this.author}`;
    }
}
