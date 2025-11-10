import { iEngine } from './i-engine';
import { StreetBike } from './streetbike';
import { BaseMotorcycleConfig } from './i-motorcycle-config';
import { TourEnduroConfig } from './i-tourenduro-config';
import { TourEnduro } from './tourenduro';
import { testRide } from './test-ride';

const myEngine: iEngine = {
    engineType: 'L-twin',
    torque: 100,
    cooling: 'liquid',
    stRpm: 2000,
    isRunning: false
};

const tenereEngine: iEngine = {
    engineType: 'parallel-twin',
    torque: 68,
    cooling: 'liquid',
    stRpm: 1200,
    isRunning: false
};

const streetBikeConfig: BaseMotorcycleConfig = {
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
    engine: tenereEngine,
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

console.log('--- Street Bike Test ---');
testRide(myBike);

console.log('--- Tour Enduro Test ---');
testRide(adventure);
