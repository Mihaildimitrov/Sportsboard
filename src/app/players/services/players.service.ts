import { getPlayers } from './../store/players.actions';
import { IAppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(public store: Store<IAppState>) { }

  getPlayers() {

    this.store.dispatch(getPlayers());
  }
}
