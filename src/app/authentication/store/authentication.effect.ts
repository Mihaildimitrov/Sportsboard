import { User } from './../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignUpCredentials } from './../models/sign-up-credentials.model';
import { signUp, authenticationSuccess, authenticationFailure, getUserAuthenticationState } from './authentication.actions';
import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of, from } from 'rxjs';


@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions$: Actions,
    public authClient: AngularFireAuth,
  ) {}

  getUserAuthenticationState$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(getUserAuthenticationState),
      exhaustMap(() => 
      this.authClient.authState.pipe(
        map((user: firebase.User) => authenticationSuccess({ user: new User(user.uid, user.email) })),
        catchError(error => of(authenticationFailure({ error })))
      )
    )
  ));

  signUp$ = createEffect(() =>
    this.actions$.pipe( 
      ofType(signUp),
      map(action => action.signUpCredentials),
      exhaustMap((credentials: SignUpCredentials) => 
      from(this.authClient.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
          map(firebaseUserCredentials => authenticationSuccess({ user: new User(firebaseUserCredentials.user.uid, firebaseUserCredentials.user.email) })),
          catchError(error => of(authenticationFailure({ error })))
        )
      )
    )
  );


}
