import { PlayerViewComponent } from './views/player-view/player-view.component';
import { PlayersViewComponent } from './views/players-view/players-view.component';
import { Routes } from '@angular/router';

export const playersRoutes: Routes = [
    { path: 'players', component: PlayersViewComponent },
    { path: 'player/:id', component: PlayerViewComponent }
]