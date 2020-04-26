import { ResetPasswordViewComponent } from './views/reset-password-view/reset-password-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { SignInViewComponent } from './views/sign-in-view/sign-in-view.component';
import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    { path: "signin", component: SignInViewComponent },
    { path: "signup", component: SignUpViewComponent },
    { path: "resetpassword", component: ResetPasswordViewComponent }
]