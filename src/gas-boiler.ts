import { IWaterHeater } from './i-water-heater';

export class GasBoiler implements IWaterHeater{
    public isOn: boolean;
    public targetTemperature: number;
    private currentTemperature: number;

    public constructor() {
        this.isOn = false;
        this.targetTemperature = 20;
        this.currentTemperature = 20;
    }

    public turnOn(): void {
        this.isOn = true;
        console.log('Gas boiler is now ON.');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('Gas boiler is now OFF.');
    }

    public setTemperature(temperature: number): void {
        this.targetTemperature = temperature;
        console.log(`Target temperature set to ${temperature}°C.`);
    }

    public heatWater(): void {
        if (this.isOn) {
            while (this.currentTemperature < this.targetTemperature) {
                this.currentTemperature++;
                console.log(`Gas is Heating... Current temperature: ${this.currentTemperature}°C`);
            }
            console.log('Water has reached the target temperature. you are good to get Shower');
        } else {
            console.log('Cannot heat water. The boiler is OFF.');
        }
    }
}
