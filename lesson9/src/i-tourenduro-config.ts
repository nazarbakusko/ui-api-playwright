import { BaseMotorcycleConfig } from './i-motorcycle-config';

export interface TourEnduroConfig extends BaseMotorcycleConfig {
    windShieldHeight: number;
    luggageCapacity: number;
    suspensionTravel: number;
    gpsNavigation: boolean;
    heatedGrips: boolean;
    offRoadMode: boolean;
    rangePerTank: number;
}
