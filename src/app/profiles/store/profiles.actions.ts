import { Profile } from './../../profiles/models/profile.model';
import { Action } from '@ngrx/store';

export enum ProfilesActionsTypes {
  GetProfiles = 'Get Profiles',
  GetProfilesSuccess = 'Get Profiles Success',
  GetProfile = 'Get Profile',
  GetProfileSuccess = 'Get Profile Success'
}

export class GetProfiles implements Action {
  public readonly type = ProfilesActionsTypes.GetProfiles;
}

export class GetProfilesSuccess implements Action {
  public readonly type = ProfilesActionsTypes.GetProfilesSuccess;
  constructor(public payload: Profile[]) {}
}

export class GetProfile implements Action {
  public readonly type = ProfilesActionsTypes.GetProfile;
  constructor(public payload: string) {}
}

export class GetProfileSuccess implements Action {
  public readonly type = ProfilesActionsTypes.GetProfileSuccess;
  constructor(public payload: Profile) {}
}

export type ProfilesActions = GetProfiles | GetProfilesSuccess | GetProfile | GetProfileSuccess;
