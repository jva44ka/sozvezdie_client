import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourPageComponent } from './tour-page.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [TourPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TourPageComponent]
})
export class TourPageModule { }
