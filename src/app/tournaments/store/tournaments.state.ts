import { Tournament } from './../models/tournament.model';

export interface ITournamentsState {
    tournaments: Tournament[];
    tournament: Tournament;
    error: any;
}

export const initialTournamentState: ITournamentsState = {
    tournaments: null,
    tournament: null,
    error: null
};
