import { PlayersEffects } from './store/players.effects';
import { playersRoutes } from './players.routing';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { PlayersViewComponent } from './views/players-view/players-view.component';
import { PlayerViewComponent } from './views/player-view/player-view.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { playerReducers } from './store/players.reducers';


@NgModule({
  declarations: [
    PlayersViewComponent, 
    PlayerViewComponent, 
    PlayersComponent, 
    PlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(playersRoutes),
    StoreModule.forFeature("players", playerReducers),
    EffectsModule.forFeature([PlayersEffects])
  ]
})
export class PlayersModule { }
