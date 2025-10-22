import { Engine } from './i-engine';

export interface MotorcycleConfig {
    brand: string;
    model: string;
    engineCapacity: number;
    horsePower: number;
    weight: number;
    fuelCapacity: number;
    fuelLevel: number;
    engine: Engine;
    centerStand: boolean;
    sideStand: boolean;
}
