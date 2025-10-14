export interface IElectricDevice {
    name: string;
    isPowerCordConnected: boolean;
    plugIn(): void;
    unplug(): void;
    getMomentumElectricConsuption(): number;
    getElectricCharacteristics(): unknown;
}
