import { Motorcycle } from './motorcycle';

export function testRide(bike: Motorcycle): void {
    bike.startEngine();
    bike.ride();
    console.log(`Fuel level: ${bike.getFuelLevel()} liters`);
    bike.refuel(3);
    console.log(`Fuel level after refuel: ${bike.getFuelLevel()} liters`);
    bike.stopEngine();
    bike.parkBike();
}
