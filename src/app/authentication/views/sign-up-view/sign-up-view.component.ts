import { AuthenticationService } from './../../services/authentication.service';
import { SignUpCredentials } from './../../models/sign-up-credentials.model';
import { IAppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.scss']
})
export class SignUpViewComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signUpTestCredentials: SignUpCredentials = {
    email: 'admin@bg.bg',
    password: 'admin123',
    firstName: 'Test 1',
    lastName: 'Test 2'
  };

  onSubmit() {
    // this.store.dispatch(signUp({ signUpCredentials: this.signUpTestCredentials }));
    this.authenticationService.SignUp(this.signUpTestCredentials);
  }

}
