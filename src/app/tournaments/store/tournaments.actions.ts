import { createAction, props } from '@ngrx/store';
import { Tournament } from './../models/tournament.model';

export const getTournaments = createAction('Get tournaments');
export const getTournamentsSuccess = createAction('Get tournaments success', props<{ tournaments: Tournament[] }>());
export const getTournamentsFailure = createAction('Get tournaments failure', props<{ error: any }>());
export const getTournament = createAction('Get tournament', props<{ id: any }>());
export const getTournamentSuccess = createAction('Get tournament success', props<{ tournament: Tournament }>());
export const getTournamentFailure = createAction('Get tournament failure', props<{ error: any }>());
