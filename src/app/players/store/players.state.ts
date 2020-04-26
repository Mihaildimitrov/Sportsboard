import { Player } from './../models/player.model';

export interface IPlayersState {
  players: Player[];
  player: Player;
  error: any;
}

export const initialPlayerState: IPlayersState = {
  players: null,
  player: null,
  error: null
};
