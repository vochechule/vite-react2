// Guest.ts
import { Hotel } from './Hotel';

export class Guest {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    makeReservation(hotel: Hotel, roomNumber: number): void {
        hotel.reserveRoom(this, roomNumber);
    }

    cancelReservation(hotel: Hotel, roomNumber: number): void {
        hotel.cancelReservation(this, roomNumber);
    }
}
