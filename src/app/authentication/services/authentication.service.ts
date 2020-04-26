import { isUserSignedIn } from './../store/authentication.selectors';
import { IAppState } from './../../store/app.state';
import { signUp, getUserAuthenticationState } from './../store/authentication.actions';
import { Store } from '@ngrx/store';
import { ISignUpCredentials } from './../models/sign-up-credentials.model';
import { Observable, of, throwError, from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isUserSignedIn$: Observable<boolean> = this.store.select(isUserSignedIn);

  constructor(
    public store: Store<IAppState>
  ) { }

  getUserAuthenticationState() {
    this.store.dispatch(getUserAuthenticationState());
  }

  // SignIn(): Observable<any> {

  // }

  SignUp(signUpCredentials: ISignUpCredentials): void {

    // TODO: validate credentials:

    this.store.dispatch(signUp({ signUpCredentials: signUpCredentials }));
  }

  // resetPassword(): Observable<any> {

  // }

}
