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
}

export abstract class Motorcycle {

    public brand: string;
    public model: string;
    public engineCapacity: number;
    public horsePower: number;
    public weight: number;
    public fuelCapacity: number;
    public fuelLevel: number;
    public engine: Engine;
    public isEngineRunning: boolean;

    public constructor(config: MotorcycleConfig) {
        this.brand = config.brand;
        this.engine = config.engine;
        this.model = config.model;
        this.engineCapacity = config.engineCapacity;
        this.horsePower = config.horsePower;
        this.weight = config.weight;
        this.fuelCapacity = config.fuelCapacity;
        this.fuelLevel = config.fuelLevel;
        this.isEngineRunning = false;
    }

    public abstract startEngine(): void;
    public abstract stopEngine(): void;
    public abstract ride(): void;

    public refuel(liters: number): void {
        const freeSpace: number = this.fuelCapacity - this.fuelLevel;
        if (freeSpace >= liters) {
            this.fuelLevel = this.fuelLevel + liters;
        } else {
            throw new Error('There are only ' + freeSpace + ' liters of free space');
        }
    }
}


