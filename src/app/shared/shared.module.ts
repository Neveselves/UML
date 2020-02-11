import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import {PtBrMatPaginatorIntl } from '../shared/pt-br-mat-paginator-intl';
import { TipoPipe } from './pipes/tipo.pipe';
@NgModule({
  declarations: [MascaraDirective, TipoPipe],
  imports: [
    CommonModule
  ],
  exports:[
    MascaraDirective,
    TipoPipe //importante que seja definido aqui para que ele seja visivel tanto para o pai como para o filho
  ],
  providers:[
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
