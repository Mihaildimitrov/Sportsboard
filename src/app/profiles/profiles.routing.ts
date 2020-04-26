import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { ProfilesViewComponent } from './views/profiles-view/profiles-view.component';
import { Routes } from '@angular/router';

export const profilesRoutes: Routes = [
    { path: '', component: ProfilesViewComponent },
    { path: ':id', component: ProfileViewComponent }
]