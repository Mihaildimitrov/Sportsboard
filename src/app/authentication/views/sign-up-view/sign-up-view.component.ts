import { AuthenticationService } from './../../services/authentication.service';
import { SignUpCredentials, ISignUpCredentials } from './../../models/sign-up-credentials.model';
import { IAppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.scss']
})
export class SignUpViewComponent implements OnInit {

  signUpCredentials: ISignUpCredentials;

  constructor(
    private store: Store<IAppState>,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit($event){
    this.signUpCredentials = $event;
    this.authenticationService.SignUp(this.signUpCredentials);
    // TODO SendVerificationEmail();
    // route.navigate([])
    this.router.navigateByUrl('/signin');
  }
}
