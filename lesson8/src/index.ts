import { Engine } from './i-engine';
import { StreetBike } from './streetbike';
import { MotorcycleConfig } from './abstraction';

const myEngine: Engine = {
    engineType: 'L-twin',
    torque: 100,
    cooling: 'liquid',
    stRpm: 2000,
    isRunning: false
};

const streetBikeConfig: MotorcycleConfig = {
    brand: 'KTM',
    model: 'Duke 890',
    engineCapacity: 890,
    horsePower: 115,
    weight: 180,
    fuelCapacity: 14,
    fuelLevel: 5,
    engine: myEngine
};

const myBike = new StreetBike(streetBikeConfig);

myBike.startEngine();
myBike.ride();
myBike.refuel(3);
console.log(myBike.fuelLevel);
myBike.stopEngine();
