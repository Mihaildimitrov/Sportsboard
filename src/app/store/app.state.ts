import { IAuthenticationState } from './../authentication/store/authentication.state';
import { IProfileState } from './../profiles/store/profiles.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ITournamentsState } from '../tournaments/store/tournaments.state';
import { ISportCentersState } from '../sport-centers/models/i-sport-centers-state';

export interface IAppState {
  router?: RouterReducerState;
  profiles: IProfileState;
  tournaments: ITournamentsState;
  authentication: IAuthenticationState;
  sportCenters: ISportCentersState
}
