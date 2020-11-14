import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IModalWindowOptions } from './modal-window-options';
import { ModalWindowDialogComponent } from './modal-window-dialog/modal-window-dialog.component';

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() options: IModalWindowOptions;
  @Input() tempRef: TemplateRef<object>;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowDialogComponent, {
      minWidth: '30%',
      maxWidth: '80%',
      minHeight: '30%',
      maxHeight: '90%',
      width: this.options.width,
      height: this.options.height,
      data: {
        title: this.options.title,
        containsForm: this.options.containsForm
          ? this.options.containsForm
          : false,
        templateRef: this.tempRef,
      }
    });

    dialogRef.disableClose = this.options.disableClose;
  }
}
