import { dashboardReducers } from './store/dashboard.reducers';
import { StoreModule } from '@ngrx/store';
import { dashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    StoreModule.forFeature("dashboard", dashboardReducers),
  ]
})
export class DashboardModule { }
