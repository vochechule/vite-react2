// src/designPatterns/observer/chat.ts

// Rozhraní pro pozorovatele
export interface Observer {
    receiveMessage(message: string): void;
  }
  
  // Třída pro chatovací místnost
  export class ChatRoom {
    private users: Observer[] = [];
  
    // Přidání uživatele do místnosti
    addUser(user: Observer): void {
      this.users.push(user);
    }
  
    // Odebrání uživatele z místnosti
    removeUser(user: Observer): void {
      this.users = this.users.filter(u => u !== user);
    }
  
    // Odeslání zprávy všem uživatelům
    sendMessage(message: string): void {
      for (const user of this.users) {
        user.receiveMessage(message);
      }
    }
  }
  
  // Třída pro chatového uživatele
  export class ChatUser implements Observer {
    constructor(private name: string) {}
  
    // Metoda pro přijetí zprávy
    receiveMessage(message: string): void {
      console.log(`${this.name} obdržel zprávu: "${message}"`);
    }
  }
  