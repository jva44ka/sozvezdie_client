import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursListPageComponent } from './tours-list-page.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [ToursListPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ToursListPageComponent]
})
export class ToursListPageModule { }
