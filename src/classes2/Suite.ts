// Suite.ts
import { Room } from './Room';

export class Suite extends Room {
  private hasMinibar: boolean;

  constructor(roomNumber: number, hasMinibar: boolean) {
    super(roomNumber, 3000); // Set a higher price for the suite
    this.hasMinibar = hasMinibar;
  }

  public describeRoom(): string {
    const minibarText = this.hasMinibar ? 's minibarem' : 'bez minibaru';
    return `${super.describeRoom()}, Typ: Apartmá ${minibarText}`;
  }
}
