import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedDirective } from './directives/is-logged.directive';
import { DecodificaSessoPipe } from './pipes/decodifica-sesso.pipe';
import { IfRolesDirective } from './directives/if-roles.directive';



@NgModule({
  declarations: [
    IsLoggedDirective,
    DecodificaSessoPipe,
    IfRolesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IsLoggedDirective,
    DecodificaSessoPipe,
    IfRolesDirective
  ]
})
export class SharedModule { }
