import { ProfilesActionsTypes, ProfilesActions } from './profiles.actions';
import { IProfileState, initialProfileState } from './profiles.state';

export const profileReducers = (
  state = initialProfileState,
  action: ProfilesActions
): IProfileState => {
  switch (action.type) {
    case ProfilesActionsTypes.GetProfilesSuccess: {
      return {
        ...state,
        profiles: action.payload
      };
    }
    case ProfilesActionsTypes.GetProfileSuccess: {
      return {
        ...state,
        selectedProfile: action.payload
      };
    }

    default:
      return state;
  }
};
