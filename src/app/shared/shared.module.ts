import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TourCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
      TourCardComponent
  ]
})
export class SharedModule { }
