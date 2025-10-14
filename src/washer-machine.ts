import { IElectricDevice } from './i-electric-device';

export class WasherMachine implements IElectricDevice {
    public isOn: boolean;
    public isPowerCordConnected: boolean;
    public name: string;
    public currentCycle: string;

    public constructor(name = 'Generic Washer Machine') {
        this.isOn = false;
        this.isPowerCordConnected = false;
        this.name = name;
        this.currentCycle = 'Idle';
    }
    public turnOn(): void {
        this.isOn = true;
        console.log('Washer Machine is now ON.');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('Washer Machine is now OFF.');
    }
    public plugIn(): void {
        this.isPowerCordConnected = true;
        console.log('Washer Machine is plugged in.');
    }
    public unplug(): void {
        this.isPowerCordConnected = false;
        console.log('Washer Machine is unplugged.');
    }
    public getMomentumElectricConsuption(): number {
        return this.isOn ? 500 : 0; // Example: 500W when ON, 0W when OFF
    }

    public getElectricCharacteristics(): unknown {
        return {
            voltage: 220,
            power: this.getMomentumElectricConsuption(),
            status: this.isOn ? 'ON' : 'OFF',
            currentCycle: this.currentCycle
        };
    }
}
