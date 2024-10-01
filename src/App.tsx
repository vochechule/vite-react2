import React, { useState } from 'react';
import { Product } from './components/products';
import { OrderProcessor } from './components/OrderProcessor';
import './App.css';


const App: React.FC = () => {
  // Vytvoření OrderProcessor instance
  const orderProcessor = new OrderProcessor();

  // Stav pro uložení objednávek a zobrazení výsledků
  const [orders, setOrders] = useState<string[]>([]);

  // Vytvoření produktů
  const product1 = new Product(1, 'Laptop', 1500);
  const product2 = new Product(2, 'Smartphone', 800);
  const product3 = new Product(3, 'Headphones', 200);

  // Funkce pro přidání objednávek
  const handleAddOrder = (product: Product) => {
    orderProcessor.addOrder(product);
    setOrders(orderProcessor.listOrders()); // Aktualizuje stav objednávek
  };

  return (
    <div>
      <h1>Product Ordering System</h1>

      <h2>Products</h2>
      <ul>
        <li>
          {product1.getProductInfo()}
          <button onClick={() => handleAddOrder(product1)}>Add to Order</button>
        </li>
        <li>
          {product2.getProductInfo()}
          <button onClick={() => handleAddOrder(product2)}>Add to Order</button>
        </li>
        <li>
          {product3.getProductInfo()}
          <button onClick={() => handleAddOrder(product3)}>Add to Order</button>
        </li>
      </ul>

      <h2>Current Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order}</li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default App;
