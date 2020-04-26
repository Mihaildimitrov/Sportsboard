import { TournamentViewComponent } from './views/tournament-view/tournament-view.component';
import { TournamentsViewComponent } from './views/tournaments-view/tournaments-view.component';
import { Routes } from '@angular/router';

export const tournamentsRoutes: Routes = [
    { path: "tournaments", component: TournamentsViewComponent },
    { path: "tournament/:id", component: TournamentViewComponent }
]