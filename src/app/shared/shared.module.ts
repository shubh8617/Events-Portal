import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDatePipe } from './pipes/global-date.pipe';



@NgModule({
  declarations: [
    GlobalDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GlobalDatePipe
  ]
})
export class SharedModule { }
