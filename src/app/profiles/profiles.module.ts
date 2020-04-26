import { ProfilesEffects } from './store/profiles.effects';
import { profilesRoutes } from './profiles.routing';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesViewComponent } from './views/profiles-view/profiles-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EffectsModule } from '@ngrx/effects';
import { profileReducers } from './store/profiles.reducers';

@NgModule({
  declarations: [
    ProfilesViewComponent, 
    ProfileViewComponent, 
    ProfilesComponent, 
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profilesRoutes),
    StoreModule.forFeature("profiles", profileReducers),
    EffectsModule.forFeature([ProfilesEffects])
  ]
})
export class ProfilesModule { }
