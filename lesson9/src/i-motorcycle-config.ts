import { iEngine } from './i-engine';

export interface BaseMotorcycleConfig {
    brand: string;
    model: string;
    engineCapacity: number;
    horsePower: number;
    weight: number;
    fuelCapacity: number;
    fuelLevel: number;
    engine: iEngine;
    centerStand: boolean;
    sideStand: boolean;
}
