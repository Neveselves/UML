import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout'
import { ListagemComponent } from './components/listagem/listagem.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { FuncionarioComponent} from './components/funcionario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LancamentoService} from  '../shared/services/lancamento.service';
import { HttpUtilService} from  '../shared/services/http-util.service';
import { MatInputModule,MatButtonModule,MatListModule,MatTooltipModule,MatIconModule,MatSnackBarModule,MatTableModule,MatPaginatorModule,MatSortModule,MatCardModule, MatPaginatorIntl} from '@angular/material';
import { PtBrMatPaginatorIntl} from '../shared/pt-br-mat-paginator-intl';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ListagemComponent, LancamentoComponent, FuncionarioComponent],
  imports: [
    CommonModule,    
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule   
  ],
  providers:[
    LancamentoService,
    HttpUtilService,
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
        
           ]
        
})
export class FuncionarioModule { }
