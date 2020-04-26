import { IAppState } from 'src/app/store/app.state';
import { createSelector } from '@ngrx/store';
import { ISportCentersState } from '../models/i-sport-centers-state';

const selectSportCenterState = (state: IAppState) => state.sportCenters;

export const selectSportCentersSearchResult = createSelector(selectSportCenterState, (state: ISportCentersState) => state.sportCentersSearchResults);