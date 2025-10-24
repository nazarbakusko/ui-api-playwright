import { Engine } from './i-engine';
import { MotorcycleConfig } from './i-motorcycle-config';
export { MotorcycleConfig };

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
    public sideStand: boolean;
    public centralStand: boolean;

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
        this.sideStand = config.sideStand;
        this.centralStand = config.centerStand;
    }

    public abstract parkBike(): void;
    public abstract ride(): void;

    public startEngine(): void {
        if (!this.isEngineRunning) {
            this.isEngineRunning = true;
            this.engine.isRunning = true;
            console.log(`${this.brand} ${this.model} engine started!`);
        } else {
            throw new Error('Engine is running');
        }
    }

    public stopEngine(): void {
        if (this.isEngineRunning) {
            this.isEngineRunning = false;
            this.engine.isRunning = false;
            console.log(`${this.brand} ${this.model} engine stopped!`);
        } else {
            throw new Error('Engine is off');
        }
    }

    public refuel(liters: number): void {
        const freeSpace: number = this.fuelCapacity - this.fuelLevel;
        if (freeSpace >= liters) {
            this.fuelLevel = this.fuelLevel + liters;
        } else {
            throw new Error('There are only ' + freeSpace + ' liters of free space');
        }
    }
}

