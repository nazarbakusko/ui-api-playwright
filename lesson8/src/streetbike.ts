import { Motorcycle, MotorcycleConfig } from './motorcycle';

export class StreetBike extends Motorcycle {

    public constructor(config: MotorcycleConfig) {
        super(config);
    }

    public ride(): void {
        if (this.isEngineRunning) {
            console.log(`${this.brand} ${this.model} is riding fast on the street!`);
        } else {
            console.log('Cannot ride, the engine is off!');
        }
    }

    public stop(): void {
        console.log(`Wow! ${this.brand} ${this.model} can do a stoppie!`);
    }

    public parkBike(): void {
        if (this.sideStand) {
            console.log(`Use the side stand to park your ${this.brand}!`);
        } else {
            console.log(`Use the central stand to park your ${this.brand}!`);
        }
    }
}
