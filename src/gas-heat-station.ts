import { GasBoiler } from './gas-boiler';

export class GasHeatStation extends GasBoiler {
    public heatTemp: number;
    private currentHeatTemperature: number;

    public constructor() {
        super();
        this.heatTemp = 20;
        this.currentHeatTemperature = 20;
        console.log('Gas Heat Station is ready to operate.');
    }

    public setHeatTemperature(temperature: number): void {
        this.heatTemp = temperature;
        console.log(`Heat station target temperature set to ${this.heatTemp}°C.`);
    }

    public heatHouse(): void {
        if (this.isOn) {
            while (this.currentHeatTemperature < this.heatTemp) {
                this.currentHeatTemperature++;
                console.log(`Heating house... Current temperature: ${this.currentHeatTemperature}°C`);
            }
            console.log('House has reached the target temperature.');
        } else {
            console.log('Cannot heat house. The heat station is OFF.');
        }
    }
}
