import { authenticationReducers } from './../authentication/store/authentication.reducer';
import { IAppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { tournamentsReducers } from '../tournaments/store/tournaments.reducers';
import { profileReducers } from '../profiles/store/profiles.reducers';
import { sportCenterReducer } from '../sport-centers/store/sport-centers.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  profiles: profileReducers,
  tournaments: tournamentsReducers,
  authentication: authenticationReducers,
  sportCenters: sportCenterReducer
};
