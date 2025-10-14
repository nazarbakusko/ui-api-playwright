import { IElectricDevice } from './i-electric-device';
import { IWaterHeater } from './i-water-heater';

export class ElectricBoiler implements IWaterHeater, IElectricDevice {
    public isOn: boolean;
    public targetTemperature: number;
    private currentTemperature: number;
    public isPowerCordConnected: boolean;

    public constructor(public name = 'Generic Boiler') {
        this.isOn = false;
        this.targetTemperature = 20;
        this.currentTemperature = 20;
        this.isPowerCordConnected = false;
    }

    public turnOn(): void {
        this.isOn = true;
        console.log('Electric boiler is now ON.');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('Electric boiler is now OFF.');
    }

    public setTemperature(temperature: number): void {
        this.targetTemperature = temperature;
        console.log(`Target temperature set to ${temperature}°C.`);
    }

    public heatWater(): void {
        if (this.isOn) {
            while (this.currentTemperature < this.targetTemperature) {
                this.currentTemperature++;
                console.log(`Heating... Current temperature: ${this.currentTemperature}°C`);
            }
            console.log('Water has reached the target temperature.');
        } else {
            console.log('Cannot heat water. The boiler is OFF.');
        }
    }

    public plugIn(): void {
        this.isPowerCordConnected = true;
        console.log('Electric boiler is plugged in.');
    }

    public unplug(): void {
        this.isPowerCordConnected = false;
        console.log('Electric boiler is unplugged.');
    }

    public getMomentumElectricConsuption(): number {
        return this.isOn ? 2000 : 0; // Example: 2000W when ON, 0W when OFF
    }

    public getElectricCharacteristics(): unknown {
        return {
            voltage: 220,
            power: 2000,
            frequency: 50
        };
    }
}
