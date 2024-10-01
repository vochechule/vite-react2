// import React, { useState } from 'react';
// import { Product } from './components/products';
// import { OrderProcessor } from './components/OrderProcessor';
// import './App.css';


// const App: React.FC = () => {
//   // Vytvoření OrderProcessor instance
//   const orderProcessor = new OrderProcessor();

//   // Stav pro uložení objednávek a zobrazení výsledků
//   const [orders, setOrders] = useState<string[]>([]);

//   // Vytvoření produktů
//   const product1 = new Product(1, 'Laptop', 1500);
//   const product2 = new Product(2, 'Smartphone', 800);
//   const product3 = new Product(3, 'Headphones', 200);

//   // Funkce pro přidání objednávek
//   const handleAddOrder = (product: Product) => {
//     orderProcessor.addOrder(product);
//     setOrders(orderProcessor.listOrders()); // Aktualizuje stav objednávek
//   };

//   return (
//     <div>
//       <h1>Product Ordering System</h1>

//       <h2>Products</h2>
//       <ul>
//         <li>
//           {product1.getProductInfo()}
//           <button onClick={() => handleAddOrder(product1)}>Add to Order</button>
//         </li>
//         <li>
//           {product2.getProductInfo()}
//           <button onClick={() => handleAddOrder(product2)}>Add to Order</button>
//         </li>
//         <li>
//           {product3.getProductInfo()}
//           <button onClick={() => handleAddOrder(product3)}>Add to Order</button>
//         </li>
//       </ul>

//       <h2>Current Orders</h2>
//       {orders.length > 0 ? (
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index}>{order}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No orders yet.</p>
//       )}
//     </div>
//   );
// };

// export default App;






























// import React, { useState } from 'react';
// import { Logger } from './designPatterns/singleton/logger'; // Import loggeru

// const App: React.FC = () => {
//   const logger = Logger.getInstance(); // Získání instance loggeru

//   const [messages, setMessages] = useState<string[]>([]);

//   // Funkce pro logování zpráv
//   const handleLogMessage = () => {
//     const message = `User clicked the button at ${new Date().toLocaleTimeString()}`;
//     logger.logMessage(message); // Logování zprávy pomocí singletonu
//     setMessages([...logger.getLogs()]); // Aktualizace zobrazených zpráv
//   };

//   return (
//     <div>
//       <h1>Singleton Logger Example</h1>
//       <button onClick={handleLogMessage}>Log Message</button>
//       <h2>Logged Messages</h2>
//       {messages.length > 0 ? (
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No messages logged yet.</p>
//       )}
//     </div>
//   );
// };

// export default App;





















// import React, { useState } from 'react';
// import { Car, Bike, Vehicle } from './designPatterns/prototype/vehicle';

// const App: React.FC = () => {
//   // Initial vehicles
//   const initialCar = new Car('Toyota', 'Corolla', 4);
//   const initialBike = new Bike('Yamaha', 'FZ', true);

//   // State to store cloned vehicles
//   const [vehicles, setVehicles] = useState<Vehicle[]>([]);

//   // Function to clone a car and add it to the list
//   const cloneCar = () => {
//     const clonedCar = initialCar.clone();
//     clonedCar.model = `${clonedCar.model} Clone`; // Adjusting cloned model name
//     setVehicles([...vehicles, clonedCar]);
//   };

//   // Function to clone a bike and add it to the list
//   const cloneBike = () => {
//     const clonedBike = initialBike.clone();
//     clonedBike.model = `${clonedBike.model} Clone`; // Adjusting cloned model name
//     setVehicles([...vehicles, clonedBike]);
//   };

//   return (
//     <div>
//       <h1>Prototype Pattern Example - Vehicles</h1>

//       <div>
//         <h2>Original Vehicles</h2>
//         <p>{initialCar.getDetails()}</p>
//         <p>{initialBike.getDetails()}</p>

//         <button onClick={cloneCar}>Clone Car</button>
//         <button onClick={cloneBike}>Clone Bike</button>
//       </div>

//       <div>
//         <h2>Cloned Vehicles</h2>
//         {vehicles.length > 0 ? (
//           <ul>
//             {vehicles.map((vehicle, index) => (
//               <li key={index}>{vehicle.getDetails()}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No vehicles cloned yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;















// import React from 'react';
// import { AccountFactory } from './designPatterns/factory/accounts';

// const App: React.FC = () => {
//   // Vytvoření různých účtů pomocí továrny
//   const admin = AccountFactory.createAccount("admin");
//   const customer = AccountFactory.createAccount("customer");
//   const guest = AccountFactory.createAccount("guest");

//   return (
//     <div>
//       <h1>Factory Pattern Example - User Accounts</h1>
//       <h2>Admin Permissions</h2>
//       <p>{JSON.stringify(admin.getPermissions())}</p>

//       <h2>Customer Permissions</h2>
//       <p>{JSON.stringify(customer.getPermissions())}</p>

//       <h2>Guest Permissions</h2>
//       <p>{JSON.stringify(guest.getPermissions())}</p>
//     </div>
//   );
// };

// export default App;














// import React from 'react';
// import { Book } from './designPatterns/constructor/book';

// const App: React.FC = () => {
//   // Vytvoření instance třídy Book
//   const book = new Book("1984", "George Orwell", 1949);

//   return (
//     <div>
//       <h1>Constructor Pattern Example - Book</h1>
//       <p>{book.getDetails()}</p>
//     </div>
//   );
// };

// export default App;












import React from 'react';
import { ChatRoom, ChatUser } from './designPatterns/observer/chat';

const App: React.FC = () => {
  // Vytvoření chatovací místnosti
  const chatRoom = new ChatRoom();

  // Vytvoření uživatelů
  const user1 = new ChatUser("Alice");
  const user2 = new ChatUser("Bob");

  // Přidání uživatelů do chatovací místnosti
  chatRoom.addUser(user1);
  chatRoom.addUser(user2);

  // Odeslání zprávy do chatovací místnosti
  chatRoom.sendMessage("Vítejte v chatovací místnosti!");

  return (
    <div>
      <h1>Observer Pattern Example - Chat Room</h1>
      <p>Uživatelé obdrželi zprávu, zkontrolujte konzoli pro detaily.</p>
    </div>
  );
};

export default App;
