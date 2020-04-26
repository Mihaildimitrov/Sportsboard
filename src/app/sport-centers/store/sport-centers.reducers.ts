import { createReducer, on, Action, State } from '@ngrx/store';
import { FindSportCenter, FindSportCenterSuccess } from './sport-centers.actions';
import { SportCentersState } from '../models/sport-centers-state.model';
import { ISportCentersState } from '../models/i-sport-centers-state';

var initial = new SportCentersState();

const _sportCenterReducer = createReducer(initial,
    on(FindSportCenterSuccess, (state, action) => findSportCenterSuccessHandler(state, action))
);

export function sportCenterReducer(state, action) {
    return _sportCenterReducer(state, action);
}

var findSportCenterSuccessHandler = function (state: ISportCentersState, action: any): ISportCentersState {
    return { ...state, sportCentersSearchResults: action.sportCentersSearchResults };
}

// export function sportCenterReducer(state: ISportCentersState, action: Action) {
//     return createReducer(initial,
//         on(FindSportCenter, (state, action): ISportCentersState => ({...state }))
//     );
// }