import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { CommonModule } from '@angular/common';  
  
import {ConfirmDialogComponent} from 'src/app/utilidades/confirm-dialog/confirm-dialog.component';  
import {ConfirmDialogService} from 'src/app/ConfirmDialog.service';  
  
@NgModule({  
    declarations: [  
        ConfirmDialogComponent  
    ],  
    imports: [  
        BrowserModule,  
        CommonModule  
    ],  
    exports: [  
        ConfirmDialogComponent  
    ],  
    providers: [  
       ConfirmDialogService  
    ]  
})  
export class ConfirmDialogModule  
{  
}  