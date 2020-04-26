import { AuthGuard } from './authentication/services/auth.guard';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesModule } from './profiles/profiles.module';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SportCentersModule } from './sport-centers/sport-centers.module';


const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['signin']);

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToSignIn }
  },
  {
    path: 'profiles',
    loadChildren: () => ProfilesModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToSignIn }
  },
  {
    path: 'tournaments',
    loadChildren: () => TournamentsModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToSignIn }
  },
  {
    path: '',
    loadChildren: () => AuthenticationModule
  },
  {
    path: 'centers',
    loadChildren: () => SportCentersModule
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
