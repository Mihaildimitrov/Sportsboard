import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ISignUpCredentials } from '../../models/sign-up-credentials.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() signUpOutput = new EventEmitter();

  signupForm: FormGroup;
  signUpCred: ISignUpCredentials;

  createForm() {

    this.signupForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confPassword: new FormControl(),
    });
  }

  onSubmit() {
    this.signUpCred = this.signupForm.value as ISignUpCredentials;
    this.signUpOutput.emit(this.signUpCred);
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.createForm();
  }
}