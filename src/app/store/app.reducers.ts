import { authenticationReducers } from './../authentication/store/authentication.reducer';
import { IAppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { tournamentsReducers } from '../tournaments/store/tournaments.reducers';
import { playerReducers } from '../players/store/players.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  players: playerReducers,
  tournaments: tournamentsReducers,
  authentication: authenticationReducers
};
