import { TournamentsEffects } from './store/tournaments.effects';
import { tournamentsReducers } from './store/tournaments.reducers';
import { tournamentsRoutes } from './tournaments.routing';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsViewComponent } from './views/tournaments-view/tournaments-view.component';
import { TournamentViewComponent } from './views/tournament-view/tournament-view.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    TournamentsViewComponent, 
    TournamentViewComponent, 
    TournamentComponent, 
    TournamentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tournamentsRoutes),
    StoreModule.forFeature("tournaments", tournamentsReducers),
    EffectsModule.forFeature([TournamentsEffects])
  ]
})
export class TournamentsModule { }
