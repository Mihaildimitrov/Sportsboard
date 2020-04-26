import { IAuthenticationState } from './authentication.state';
import { IAppState } from './../../store/app.state';
import { createSelector } from '@ngrx/store';

const selectAuthentication = (state: IAppState) => state.authentication;

export const isUserSignedIn = createSelector( selectAuthentication, (state: IAuthenticationState) => state.isUserLogged );
