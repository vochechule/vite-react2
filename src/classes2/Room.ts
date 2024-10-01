// Room.ts
export class Room {
    private roomNumber: number;
    private available: boolean;
    private price: number;
  
    constructor(roomNumber: number, price: number) {
      this.roomNumber = roomNumber;
      this.available = true;
      this.price = price;
    }
  
    public checkAvailability(): boolean {
      return this.available;
    }
  
    public reserve(): void {
      if (this.available) {
        this.available = false;
      } else {
        throw new Error('Pokoj je již rezervován.');
      }
    }
  
    public release(): void {
      this.available = true;
    }
  
    public getRoomNumber(): number {
      return this.roomNumber;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public describeRoom(): string {
      return `Pokoj číslo: ${this.roomNumber}, Cena: ${this.price} Kč, ${this.available ? 'Dostupný' : 'Nedostupný'}`;
    }
  }
  