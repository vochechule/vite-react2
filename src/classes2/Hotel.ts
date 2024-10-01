// Hotel.ts
import { Room } from './Room';
import { Guest } from './Guest';

class Hotel {
    private rooms: Room[];
    private reservations: { guest: Guest; room: Room }[];

    constructor() {
        this.rooms = [];
        this.reservations = [];
    }

    public addRoom(room: Room): void {
        this.rooms.push(room);
    }

    public listAvailableRooms(): Room[] {
        return this.rooms.filter(room => room.checkAvailability());
    }

    public reserveRoom(guest: Guest, roomNumber: number): void {
        const room = this.rooms.find(r => r.getRoomNumber() === roomNumber);
        if (room && room.checkAvailability()) {
            room.reserve();
            this.reservations.push({ guest, room });
        } 
    }

    public cancelReservation(guest: Guest, roomNumber: number): void {
        const reservationIndex = this.reservations.findIndex(res =>
            res.guest === guest && res.room.getRoomNumber() === roomNumber
        );
        
        if (reservationIndex !== -1) {
            const reservation = this.reservations[reservationIndex];
            reservation.room.release();
            this.reservations.splice(reservationIndex, 1);
        } 
    }
}

export { Hotel };
