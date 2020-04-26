import { Player } from './../models/player.model';
import { createAction, props } from '@ngrx/store';

export const getPlayers = createAction('Get players');
export const getPlayersSuccess = createAction('Get players success', props<{ players: Player[] }>());
export const getPlayersFailure = createAction('Get players failure', props<{ error: any }>());
export const getPlayer = createAction('Get player', props<{ id: any }>());
export const getPlayerSuccess = createAction('Get player success', props<{ player: Player }>());
export const getPlayerFailure = createAction('Get player failure', props<{ error: any }>());