import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';



@NgModule({
  declarations: [MainNavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class SharedModule { }
