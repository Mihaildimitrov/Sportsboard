import { IAppState } from './../../store/app.state';
import { createSelector } from '@ngrx/store';
import { ITournamentsState } from './tournaments.state';

const selectTournaments = (state: IAppState) => state.tournaments;
export const selectTournamentsArray = createSelector(selectTournaments, (state: ITournamentsState) => state.tournaments);
export const selectTournament = createSelector(selectTournaments, (state: ITournamentsState) => state.tournament);