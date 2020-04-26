import { createAction, props } from '@ngrx/store';
import { SportCenterSearchCriteria } from '../models/sport-center-search-criteria';
import { SportCenterSearchResults } from '../models/sport-centers-search-results.model';

export const FindSportCenter = createAction('Find Sport Center', props<SportCenterSearchCriteria>());
export const FindSportCenterSuccess = createAction('Find Sport Center Success', props<SportCenterSearchResults>());
export const FindSportCenterFailure = createAction('Find Sport Center Failure', props<SportCenterSearchCriteria>());
