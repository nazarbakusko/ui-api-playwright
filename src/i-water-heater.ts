export interface IWaterHeater {
    isOn: boolean;
    targetTemperature: number;
    turnOn(): void;
    turnOff(): void;
    setTemperature(temperature: number): void;
    heatWater(): void;
}
