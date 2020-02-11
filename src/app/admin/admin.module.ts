import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatDialogModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { HttpUtilService } from '../shared/services/http-util.service';
import { PtBrMatPaginatorIntl} from '../shared/pt-br-mat-paginator-intl';
import { LancamentoService} from '../shared/services/LancamentoService';
import { FuncionarioService} from '../shared/services/funcionario.service';
import { AdminGuard} from '../admin/services/admin-guard.service';
import { 	ListagemComponent, ConfirmarDialog } from '../admin/components/listagem/listagem.component';
import { 	CadastroComponent } from '../admin/components/cadastro/cadastro.component';
import { 	AtualizacaoComponent } from '../admin/components/atualizacao/atualizacao.component';
import { 	AdminComponent } from '../admin/components/admin.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  declarations: [
  	ListagemComponent, 
  	CadastroComponent, 
  	AtualizacaoComponent,
    AdminComponent
  ],
  providers: [
    LancamentoService,
    FuncionarioService,
    AdminGuard,
    HttpUtilService,
    MatPaginatorIntl,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ],
  entryComponents:[ConfirmarDialog]
})
export class AdminModule { }






