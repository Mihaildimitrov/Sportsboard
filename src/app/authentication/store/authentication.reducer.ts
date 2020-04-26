import { createReducer, on } from '@ngrx/store';
import { initialAuthenticationState } from './authentication.state';
import { authenticationSuccess, authenticationFailure } from './authentication.actions';


const _authenticationReducers = createReducer(initialAuthenticationState,
  on(authenticationSuccess, (state, { user }) => ({ ...state, user: user, isUserLogged: true, error: null })),
  on(authenticationFailure, (state, { error }) => ({ ...state, user: null, isUserLogged: false, error: error })),
);
 
export function authenticationReducers(state, action) {
  return _authenticationReducers(state, action);
}