import { TourEnduroConfig } from './i-tourenduro-config';
import { Motorcycle } from './motorcycle';

export class TourEnduro extends Motorcycle {

    private windShieldHeight: number;
    private luggageCapacity: number;
    private suspensionTravel: number;
    private hasAdjustablePreload: boolean;
    private gpsNavigation: boolean;
    private heatedGrips: boolean;
    private offRoadMode: boolean;
    private rangePerTank: number;

    public constructor(config: TourEnduroConfig) {
        super(config);
        this.windShieldHeight = config.windShieldHeight;
        this.luggageCapacity = config.luggageCapacity;
        this.suspensionTravel = config.suspensionTravel;
        this.hasAdjustablePreload = true;
        this.gpsNavigation = false;
        this.heatedGrips = true;
        this.offRoadMode = true;
        this.rangePerTank = config.rangePerTank;
    }

    public override stopEngine(): void {
        if (!this.isEngineRunning) {
            throw new Error('Engine is already off!');
        }

        if (!this.centralStand) {
            console.warn(`${this.brand} ${this.model} is on the move! Deploy central stand before stopping engine.`);
        }

        this.isEngineRunning = false;
        this.engine.isRunning = false;
        console.log(`${this.brand} ${this.model} engine stopped!`);
    }

    public ride(): void {
        if (this.isEngineRunning) {
            const rideMode = this.offRoadMode ? 'off-road' : 'on-road';
            console.log(`${this.brand} ${this.model} is riding ${rideMode}.`);
            console.log(`Fuel level: ${this.fuelLevel}/${this.fuelCapacity} liters`);
        } else {
            console.log('Cannot ride, the engine is off!');
        }
    }

    public parkBike(): void {
        console.log(this.sideStand
            ? `Use the side stand to park your ${this.brand}.`
            : `Use the central stand to park your ${this.brand}.`);

        if (this.offRoadMode) console.log('Off-road mode active. Park carefully.');
    }

    public adjustPreload(value: number): void {
        if (this.hasAdjustablePreload) {
            console.log(`Adjusting suspension preload by ${value} mm`);
        } else {
            console.log('Suspension preload adjustment not available');
        }
    }
}
