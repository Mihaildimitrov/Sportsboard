import { AuthenticationEffects } from './store/authentication.effect';
import { authenticationReducers } from './store/authentication.reducer';
import { authRoutes } from './authentication.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInViewComponent } from './views/sign-in-view/sign-in-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { ResetPasswordViewComponent } from './views/reset-password-view/reset-password-view.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    SignInViewComponent, 
    SignUpViewComponent, 
    ResetPasswordViewComponent, SignInComponent, SignUpComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature("authentication", authenticationReducers),
    EffectsModule.forFeature([AuthenticationEffects])
  ]
})
export class AuthenticationModule { }
  