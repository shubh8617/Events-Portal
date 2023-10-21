import { NgModule, getDebugNode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHomeComponent } from './components/general-home/general-home.component';



@NgModule({
  declarations: [
    GeneralHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GeneralHomeComponent
  ]
})
export class HomeModule { }
