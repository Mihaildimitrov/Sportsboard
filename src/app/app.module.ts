import { DashboardModule } from './dashboard/dashboard.module';
import { appReducers } from './store/app.reducers';
import { SharedModule } from './shared/shared.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ProfilesModule } from './profiles/profiles.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SportCentersModule } from './sport-centers/sport-centers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    AuthenticationModule,
    TournamentsModule,
    HttpClientModule,
    ProfilesModule,
    DashboardModule,
    SportCentersModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
