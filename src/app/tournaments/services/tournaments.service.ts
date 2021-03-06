import { getTournaments } from './../store/tournaments.actions';
import { IAppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  constructor(public store: Store<IAppState>) { }

  getTournaments() {
    this.store.dispatch(getTournaments());
  }

}


