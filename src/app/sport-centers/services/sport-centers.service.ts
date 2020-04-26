import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SportCenter } from '../models/sport-center.model';
import { IAppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { FindSportCenter } from '../store/sport-centers.actions';
import { SportCenterSearchCriteria } from '../models/sport-center-search-criteria';
import { selectSportCentersSearchResult } from '../store/sport-centers.selectors';

@Injectable({
  providedIn: 'root'
})
export class SportCentersService {

  sportCentersResult$ = new Subject<Array<SportCenter>>();

  constructor(private store: Store<IAppState>) {
    this.store.select(selectSportCentersSearchResult).subscribe(data => {
      this.sportCentersResult$.next(data)
    });

    this.sportCentersResult$.subscribe(data => console.log(data));
   }

  public findSportCenter(searchTerm: string) {
    this.store.dispatch(FindSportCenter(new SportCenterSearchCriteria(searchTerm)));
  }
}
