import { ElectricBoiler } from './electric-boiler';
import { GasBoiler } from './gas-boiler';
import { GasHeatStation } from './gas-heat-station';
import { IElectricDevice } from './i-electric-device';
import { IWaterHeater } from './i-water-heater';
import { WasherMachine } from './washer-machine';

function operateWaterHeater(heater: IWaterHeater): void {
    heater.turnOn();
    heater.setTemperature(60);
    heater.heatWater();
    heater.turnOff();
}

const waterHeater = new ElectricBoiler();
const gasHeater = new GasBoiler();
operateWaterHeater(waterHeater);
operateWaterHeater(gasHeater);

// ISP - ElectricShop
function getDeviceSummary(device: IElectricDevice): unknown {
    return device.getElectricCharacteristics();
}

getDeviceSummary(waterHeater);

//OCP, LSP
function operateHeatStation(heater: GasHeatStation): void {
    operateWaterHeater(heater);
    heater.turnOn();
    heater.setHeatTemperature(30);
    heater.heatHouse();
}

const heatStation = new GasHeatStation();
operateHeatStation(heatStation);

// DIP
class ElecticShop {
    public devices: IElectricDevice[];

    public constructor() {
        this.devices = [];
    }

    public addDevice(device: IElectricDevice): void {
        this.devices.push(device);
    }
    public listDevices(): void {
        this.devices.forEach((device, index) => {
            console.log(`Device ${index + 1}:`, device.getElectricCharacteristics());
        });
    }

    public sellDevice(device: IElectricDevice): IElectricDevice | undefined {
        const deviceFound =  this.devices.find(d => d.name === device.name);
        return deviceFound;
    }
}

const washerMachine = new WasherMachine('LG Washer');

const electricShop = new ElecticShop();
electricShop.addDevice(waterHeater);
electricShop.addDevice(washerMachine);

electricShop.listDevices();
// ...
