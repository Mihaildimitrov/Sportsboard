import { getTournamentsSuccess, getTournamentsFailure, getTournamentSuccess, getTournamentFailure } from './tournaments.actions';
import { createReducer, on } from '@ngrx/store';
import { initialTournamentState } from './tournaments.state';


const _tournamentsReducers = createReducer(initialTournamentState,
  on(getTournamentsSuccess, (state, { tournaments }) => ({ ...state, tournaments: tournaments['tournaments'] })),
  on(getTournamentsFailure, (state, { error }) => ({ ...state, tournaments: [], error: error })),
  on(getTournamentSuccess, (state, { tournament }) => ({ ...state, tournament: tournament })),
  on(getTournamentFailure, (state, { error }) => ({ ...state, tournament: null, error: error }))
);
 
export function tournamentsReducers(state, action) {
  return _tournamentsReducers(state, action);
}
