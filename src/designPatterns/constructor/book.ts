// src/designPatterns/constructor/book.ts

// Třída pro knihu
export class Book {
    constructor(
      public title: string,
      public author: string,
      public year: number
    ) {}
  
    // Metoda pro vrácení detailů o knize
    getDetails(): string {
      return `${this.title}, autor: ${this.author}, rok vydání: ${this.year}`;
    }
  }
  