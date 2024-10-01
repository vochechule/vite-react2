// EconomyRoom.ts
import { Room } from './Room';

export class EconomyRoom extends Room {
  constructor(roomNumber: number) {
    super(roomNumber, 1500); // Set a lower price for the economy room
  }

  public describeRoom(): string {
    return `${super.describeRoom()}, Typ: Ekonomický pokoj`;
  }
}
