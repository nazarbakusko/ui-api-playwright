import { StreetBike } from './streetbike';
import { StreetBikeConfig } from './i-street-bike-config';

export class SuperNakedBike extends StreetBike {
    private trackMode: boolean;
    private launchControl: boolean;
    private slickTyres: boolean;

    public constructor(config: StreetBikeConfig) {
        super(config);
        this.trackMode = false;
        this.launchControl = false;
        this.slickTyres = true;
    }

    public enableTrackMode(): void {
        this.trackMode = true;
        console.log(`${this.brand} ${this.model} track mode enabled!`);
    }

    public enableLaunchControl(): void {
        this.launchControl = true;
        console.log(`${this.brand} ${this.model} launch control enabled!`);
    }

    public override ride(): void {
        const mode = this.trackMode ? 'Track mode' : 'Street mode';
        console.log(`${this.brand} ${this.model} is riding in ${mode}!`);
    }
}
