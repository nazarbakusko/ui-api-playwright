import { Engine } from './i-engine';
import { StreetBike } from './streetbike';
import { MotorcycleConfig } from './i-motorcycle-config';
import { TourEnduroConfig } from './i-tourenduro-config';
import { TourEnduro } from './tourenduro';

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
    engine: myEngine,
    sideStand: true,
    centerStand: false
};

const tourEnduroConfig: TourEnduroConfig = {
    brand: 'Yamaha',
    model: 'Tenere 700',
    engineCapacity: 689,
    horsePower: 72,
    weight: 205,
    fuelCapacity: 16,
    fuelLevel: 10,
    engine: {
        engineType: 'parallel-twin',
        torque: 68,
        cooling: 'liquid',
        stRpm: 1200,
        isRunning: false
    },
    sideStand: true,
    centerStand: false,
    windShieldHeight: 60,
    luggageCapacity: 120,
    suspensionTravel: 210,
    gpsNavigation: true,
    heatedGrips: true,
    offRoadMode: true,
    rangePerTank: 450
};

const myBike = new StreetBike(streetBikeConfig);
const adventure = new TourEnduro(tourEnduroConfig);

myBike.startEngine();
myBike.ride();
myBike.refuel(3);
console.log(myBike.fuelLevel);
myBike.stopEngine();

adventure.startEngine();
adventure.ride();
adventure.refuel(4);
console.log(adventure.fuelLevel);
adventure.stopEngine();
adventure.parkBike();
