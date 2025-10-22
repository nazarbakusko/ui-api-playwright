import { Motorcycle, MotorcycleConfig } from './abstraction';

export class StreetBike extends Motorcycle {

    public constructor(config: MotorcycleConfig) {
        super(config);
    }

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

    public ride(): void {
        if (this.isEngineRunning) {
            console.log(`${this.brand} ${this.model} is riding fast on the street!`);
        } else {
            console.log('Cannot ride, the engine is off!');
        }
    }
}
