import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components/cadastro-pj/cadastrar-pj.component';
import{CadastroPjComponent} from './components/cadastro-pj.component';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import{
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule} from '@angular/material';

 import{SharedModule} from '../../shared/shared.module' ;
 import{CadastrarPjService} from '../../autenticacao/cadastro-pj/services/cadastro-pj.service'




@NgModule({
  declarations: [CadastrarPjComponent,CadastroPjComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers:[
    CadastrarPjService
  ]
})
export class CadastroPjModule { }
