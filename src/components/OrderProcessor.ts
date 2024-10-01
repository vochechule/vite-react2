// src/components/orderProcessor.ts

import { Product } from './products';

export class OrderProcessor {
  private orders: Product[] = [];

  addOrder(product: Product): void {
    this.orders.push(product);
    console.log(`Order added: ${product.getProductInfo()}`);
  }

  listOrders(): string[] {
    return this.orders.map((product) => product.getProductInfo());
  }
}
