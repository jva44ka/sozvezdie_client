import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { ModalWindowDialogComponent } from './components/modal-window/modal-window-dialog/modal-window-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TourCardComponent,
    ModalWindowComponent,
    ModalWindowDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
      TourCardComponent,
      ModalWindowComponent
  ]
})
export class SharedModule { }
