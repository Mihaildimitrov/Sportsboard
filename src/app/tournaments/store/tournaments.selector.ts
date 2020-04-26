import { IAppState } from './../../store/app.state';
import { ITournamentsState } from './tournaments.state';
import { createSelector } from '@ngrx/store';

const selectTournaments = (state: IAppState) => state.tournaments;

export const selectTournamentsList = createSelector(
    selectTournaments,
  (state: ITournamentsState) => state.tournaments
);

export const selectSelectedTournament = createSelector(
    selectTournaments,
  (state: ITournamentsState) => state.selectedTournament
);
