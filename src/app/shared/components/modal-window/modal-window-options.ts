import { TemplateRef } from '@angular/core';

export interface IModalWindowOptions {
  width?: string;
  height?: string;
  title?: string;
  containsForm?: boolean;
  disableClose?: boolean;
  templateRef?: TemplateRef<object>;
}
