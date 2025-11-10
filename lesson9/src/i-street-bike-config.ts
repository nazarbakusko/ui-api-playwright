import { BaseMotorcycleConfig } from './i-motorcycle-config';

export interface StreetBikeConfig extends BaseMotorcycleConfig {
    quickShifter?: boolean;
    tractionControl?: boolean;
}
