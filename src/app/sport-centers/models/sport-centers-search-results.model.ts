import { SportCenter } from './sport-center.model';

export class SportCenterSearchResults {
    sportCentersSearchResults: Array<SportCenter>;

    constructor(sportCentersSearchResults: Array<SportCenter>) {
        this.sportCentersSearchResults = new Array<SportCenter>(...sportCentersSearchResults);
    }
}