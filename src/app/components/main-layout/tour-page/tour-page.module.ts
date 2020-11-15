import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourPageComponent } from './tour-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TourPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxImageGalleryModule,
    HammerModule
  ],
  exports: [TourPageComponent]
})
export class TourPageModule { }
