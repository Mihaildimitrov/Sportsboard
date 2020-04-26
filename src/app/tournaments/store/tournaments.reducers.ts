import { initialTournamentState, ITournamentsState } from './tournaments.state';
import { TournamentsActions, TournamentsActionsTypes } from './tournaments.actions';

export const tournamentsReducers = (
  state = initialTournamentState,
  action: TournamentsActions
): ITournamentsState => {
  switch (action.type) {
    case TournamentsActionsTypes.GetTournamentsSuccess: {
      return {
        ...state,
        tournaments: action.payload
      };
    }
    case TournamentsActionsTypes.GetTournamentSuccess: {
      return {
        ...state,
        selectedTournament: action.payload
      };
    }

    default:
      return state;
  }
};
