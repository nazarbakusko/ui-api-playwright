import { MotorcycleConfig } from './motorcycle';

export interface TourEnduroConfig extends MotorcycleConfig {
    windShieldHeight: number;
    luggageCapacity: number;
    suspensionTravel: number;
    gpsNavigation: boolean;
    heatedGrips: boolean;
    offRoadMode: boolean;
    rangePerTank: number;
}
