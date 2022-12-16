import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { DecodificaSessoPipe } from './pipes/decodifica-sesso.pipe';



@NgModule({
  declarations: [
    IsLoggedDirective,
    DecodificaSessoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsLoggedDirective,
    DecodificaSessoPipe
  ]
})
export class SharedModule { }
