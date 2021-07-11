import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentComponent } from './modal-component/Modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [ModalComponentComponent, ConfirmDialogComponent],
  imports: [
    CommonModule
  ]
})
export class UtilidadesModule { }
