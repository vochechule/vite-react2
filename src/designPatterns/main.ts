// src/designPatterns/main.ts

import { Product } from '../components/products';
import { OrderProcessor } from '../components/OrderProcessor';

// Vytvoření instancí produktů
const product1 = new Product(1, 'Laptop', 1500);
const product2 = new Product(2, 'Smartphone', 800);
const product3 = new Product(3, 'Headphones', 200);

// Vytvoření instance OrderProcessor
const orderProcessor = new OrderProcessor();

// Přidání objednávek
orderProcessor.addOrder(product1);
orderProcessor.addOrder(product2);
orderProcessor.addOrder(product3);

// Vypsání všech objednávek
orderProcessor.listOrders();
