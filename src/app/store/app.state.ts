import { IPlayersState, initialPlayerState } from './../players/store/players.state';
import { IAuthenticationState, initialAuthenticationState } from './../authentication/store/authentication.state';
import { RouterReducerState } from '@ngrx/router-store';
import { ITournamentsState, initialTournamentState } from '../tournaments/store/tournaments.state';

export interface IAppState {
  router?: RouterReducerState;
  players: IPlayersState;
  tournaments: ITournamentsState;
  authentication: IAuthenticationState
}

export const initialAppState: IAppState = {
    players: initialPlayerState,
    tournaments: initialTournamentState,
    authentication: initialAuthenticationState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
