import { Tournament } from './../models/tournament.model';

export interface ITournamentsState {
    tournaments: Tournament[];
    selectedTournament: Tournament;
}

export const initialTournamentState: ITournamentsState = {
    tournaments: null,
    selectedTournament: null
};
