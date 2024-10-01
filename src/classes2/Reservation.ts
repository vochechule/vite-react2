// Reservation.ts
import { Guest } from './Guest';
import { Room } from './Room';

export class Reservation {
    private guest: Guest;
    private room: Room;

    constructor(guest: Guest, room: Room) {
        this.guest = guest;
        this.room = room;
    }

    getGuestName(): string {
        return this.guest.getName();
    }

    getRoomNumber(): number {
        return this.room.getRoomNumber();
    }
}
