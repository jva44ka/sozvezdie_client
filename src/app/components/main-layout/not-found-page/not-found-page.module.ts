import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
