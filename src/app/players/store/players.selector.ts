import { IAppState } from '../../store/app.state';
import { createSelector } from '@ngrx/store';
import { IPlayersState } from './players.state';


const selectPlayers = (state: IAppState) => state.players;
export const selectPlayersArray = createSelector(selectPlayers, (state: IPlayersState) => state.players);
export const selectPlayer = createSelector(selectPlayers, (state: IPlayersState) => state.player);