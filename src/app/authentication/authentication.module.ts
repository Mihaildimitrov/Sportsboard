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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 

const MaterialModules: any[] =[MatButtonModule,MatFormFieldModule,MatInputModule]

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
    EffectsModule.forFeature([AuthenticationEffects]),
    MaterialModules,
    ReactiveFormsModule
  ],
  exports:[MaterialModules]
})
export class AuthenticationModule { }
  