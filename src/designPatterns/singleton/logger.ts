// src/singleton/logger.ts

export class Logger {
    private static instance: Logger;
    private logs: string[] = [];
  
    // Soukromý konstruktor, aby se zabránilo přímému vytváření instancí
    private constructor() {}
  
    // Statická metoda pro získání jediné instance třídy
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    // Metoda pro zaznamenávání zpráv
    public logMessage(message: string): void {
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] ${message}`);
      console.log(`[LOG] ${message}`);
    }
  
    // Metoda pro získání všech záznamů
    public getLogs(): string[] {
      return this.logs;
    }
  }
  