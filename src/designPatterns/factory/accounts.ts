// src/designPatterns/factory/account.ts

// Rozhraní pro uživatelský účet
export interface Account {
    getPermissions(): string[];
  }
  
  // Třída pro administrátora
  export class Admin implements Account {
    getPermissions(): string[] {
      return ["manage_users", "edit_content", "view_content"];
    }
  }
  
  // Třída pro zákazníka
  export class Customer implements Account {
    getPermissions(): string[] {
      return ["manage_account", "view_content"];
    }
  }
  
  // Třída pro hosta
  export class Guest implements Account {
    getPermissions(): string[] {
      return ["view_content"];
    }
  }
  
  // Továrna pro vytváření uživatelských účtů
  export class AccountFactory {
    static createAccount(type: string): Account {
      switch (type.toLowerCase()) {
        case "admin":
          return new Admin();
        case "customer":
          return new Customer();
        case "guest":
          return new Guest();
        default:
          throw new Error("Unknown account type.");
      }
    }
  }
  