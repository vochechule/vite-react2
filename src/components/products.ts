// src/components/product.ts

export class Product {
    constructor(
      public id: number,
      public name: string,
      public price: number
    ) {}
  
    getProductInfo(): string {
      return `Product [ID: ${this.id}, Name: ${this.name}, Price: $${this.price}]`;
    }
  }
  