import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FindSportCenter, FindSportCenterSuccess } from './sport-centers.actions';
import { exhaustMap } from 'rxjs/operators';
import { SportCenter } from '../models/sport-center.model';
import { SportCenterSearchResults } from '../models/sport-centers-search-results.model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SportCentersEffects {
    constructor(private actions$: Actions) { }

    findSportCenter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FindSportCenter),
            exhaustMap((action) => {
                let testCenter = new SportCenter();
                testCenter.name = action.searchTerm;
                return of(FindSportCenterSuccess(new SportCenterSearchResults(new Array<SportCenter>(testCenter))));
            })
        )
    );
}