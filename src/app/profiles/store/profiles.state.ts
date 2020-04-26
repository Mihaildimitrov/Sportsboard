import { Profile } from './../../profiles/models/profile.model';

export interface IProfileState {
  profiles: Profile[];
  selectedProfile: Profile;
}

export const initialProfileState: IProfileState = {
  profiles: null,
  selectedProfile: null
};
