import { User } from './../models/user.model';

export interface IAuthenticationState {
  signIn: any;
  signUp: any;
  resetPassword: any;
  user: User;
  isUserLogged: boolean;
  error: any
}

export const initialAuthenticationState: IAuthenticationState = {
    signIn: null,
    signUp: null,
    resetPassword: null,
    user: null,
    isUserLogged: false,
    error: null
};
