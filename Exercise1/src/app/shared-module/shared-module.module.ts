import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentComponent } from './button-component/button-component.component';



@NgModule({
  declarations: [
    ButtonComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponentComponent,
  ]
})
export class SharedModuleModule { }
