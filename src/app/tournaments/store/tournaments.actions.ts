import { Tournament } from './../models/tournament.model';
import { Action } from '@ngrx/store';

export enum TournamentsActionsTypes {
  GetTournaments = 'Get tournaments',
  GetTournamentsSuccess = 'Get tournaments Success',
  GetTournament = 'Get tournament',
  GetTournamentSuccess = 'Get tournament Success'
}

export class GetTournaments implements Action {
  public readonly type = TournamentsActionsTypes.GetTournaments;
}

export class GetTournamentsSuccess implements Action {
  public readonly type = TournamentsActionsTypes.GetTournamentsSuccess;
  constructor(public payload: Tournament[]) {}
}

export class GetTournament implements Action {
  public readonly type = TournamentsActionsTypes.GetTournament;
  constructor(public payload: string) {}
}

export class GetTournamentSuccess implements Action {
  public readonly type = TournamentsActionsTypes.GetTournamentSuccess;
  constructor(public payload: Tournament) {}
}

export type TournamentsActions = GetTournaments | GetTournamentsSuccess | GetTournament | GetTournamentSuccess;
