// src/designPatterns/prototype/vehicle.ts

// Interface for the prototype pattern
export interface VehiclePrototype {
    clone(): this;
  }
  
  // Base class for all vehicles
  export class Vehicle implements VehiclePrototype {
    constructor(public type: string, public brand: string, public model: string) {}
  
    // Clone method for creating a copy of the vehicle
    clone(): this {
      return Object.create(this); // Creates a shallow copy of the vehicle
    }
  
    getDetails(): string {
      return `Vehicle Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}`;
    }
  }
  
  // Car class extending Vehicle
  export class Car extends Vehicle {
    constructor(public brand: string, public model: string, public doors: number) {
      super('Car', brand, model);
    }
  
    // Overriding the getDetails method
    getDetails(): string {
      return `${super.getDetails()}, Doors: ${this.doors}`;
    }
  }
  
  // Bike class extending Vehicle
  export class Bike extends Vehicle {
    constructor(public brand: string, public model: string, public hasCarrier: boolean) {
      super('Bike', brand, model);
    }
  
    // Overriding the getDetails method
    getDetails(): string {
      return `${super.getDetails()}, Has Carrier: ${this.hasCarrier}`;
    }
  }
  