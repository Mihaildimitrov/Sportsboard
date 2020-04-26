import { IAppState } from './../../store/app.state';
import { createSelector } from '@ngrx/store';
import { IProfileState } from './profiles.state';


const selectProfiles = (state: IAppState) => state.profiles;

export const selectProfileList = createSelector(
    selectProfiles,
  (state: IProfileState) => state.profiles
);

export const selectSelectedProfile = createSelector(
    selectProfiles,
  (state: IProfileState) => state.selectedProfile
);
