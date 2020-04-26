import { ResetPasswordCredentials } from './../models/reset-password-credentials.model';
import { SignUpCredentials } from './../models/sign-up-credentials.model';
import { SignInCredentials } from './../models/sign-in-credentials.model';
import { createAction, props } from '@ngrx/store';

export const getUserAuthenticationState = createAction('Get User Authentication State');
export const signIn = createAction('Sign in', props<{ signInCredentials: SignInCredentials }>());
export const signUp = createAction('Sign up', props<{ signUpCredentials: SignUpCredentials }>());
export const authenticationSuccess = createAction('Authentication Success', props<{ user: any }>() );
export const authenticationFailure = createAction('Authentication Failure', props<{ error: any }>() );

export const resetPassword = createAction('Reset password', props<{ credentials: ResetPasswordCredentials }>());