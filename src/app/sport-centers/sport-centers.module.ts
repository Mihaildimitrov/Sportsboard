import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportCenterSearchViewComponent } from './views/sport-center-search-view/sport-center-search-view.component';
import { RouterModule } from '@angular/router';
import { sportCentersRoutes } from './sport-centers.routing';
import { SportCentersSearchComponent } from './components/sport-centers-search/sport-centers-search.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { sportCenterReducer } from './store/sport-centers.reducers';
import { EffectsModule } from '@ngrx/effects';
import { SportCentersEffects } from './store/sport-centers.effects';



@NgModule({
  declarations: [SportCenterSearchViewComponent, SportCentersSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("sportCenters", sportCenterReducer),
    EffectsModule.forFeature([SportCentersEffects]),
    RouterModule.forChild(sportCentersRoutes)
  ]
})
export class SportCentersModule { }
