import { iEngine } from './i-engine';
import { MotorcycleConfig } from './i-motorcycle-config';
export { MotorcycleConfig };

export abstract class Motorcycle {

    protected brand: string;
    protected model: string;
    protected engineCapacity: number;
    protected horsePower: number;
    protected weight: number;
    protected fuelCapacity: number;
    protected fuelLevel: number;
    protected engine: iEngine;
    protected isEngineRunning: boolean;
    protected sideStand: boolean;
    protected centralStand: boolean;

    protected constructor(config: MotorcycleConfig) {
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

    public getFuelLevel(): number {
        return this.fuelLevel;
    }

    public isRunning(): boolean {
        return this.isEngineRunning;
    }
}

