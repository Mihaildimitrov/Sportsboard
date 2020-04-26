import { getPlayersSuccess, getPlayersFailure, getPlayerSuccess, getPlayerFailure } from './players.actions';
import { initialPlayerState } from './players.state';
import { createReducer, on } from '@ngrx/store';


const _playerReducers = createReducer(initialPlayerState,
  on(getPlayersSuccess, (state, { players }) => ({ ...state, players: players['players'] })),
  on(getPlayersFailure, (state, { error }) => ({ ...state, players: [], error: error })),
  on(getPlayerSuccess, (state, { player }) => ({ ...state, player: player })),
  on(getPlayerFailure, (state, { error }) => ({ ...state, player: null, error: error }))
);
 
export function playerReducers(state, action) {
  return _playerReducers(state, action);
}