import { SportCenter } from './sport-center.model';
import { ISportCentersState } from './i-sport-centers-state';

export class SportCentersState implements ISportCentersState {
    sportCentersSearchResults: Array<SportCenter>;

    constructor() {
        this.sportCentersSearchResults = new Array<SportCenter>();
    }
}
