import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { 
  MatSelect, 
  MatTableDataSource,
  MatSnackBar,
  MatDialog, 
  MatDialogRef, 
  MAT_DIALOG_DATA,
  PageEvent,
  Sort
} from '@angular/material';
import { LancamentoService } from '../../../shared/services/LancamentoService';
import { Lancamento } from '../../../shared/models/lancamento.model';
import { Funcionario } from '../../../shared/models/funcionario.model';
import { TipoPipe } from '../../../shared/pipes/tipo.pipe';
import { HttpUtilService} from '../../../shared/services/http-util.service';
import { FuncionarioService } from 'src/app/shared/services/funcionario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  dataSource: MatTableDataSource<Lancamento>;
  colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
  funcionarioId: string;
  totalLancamentos: number;

  funcionarios: Funcionario[];
  @ViewChild(MatSelect, { static: true }) matSelect: MatSelect;
  form: FormGroup;

  private pagina: number;
  private ordem: string;
  private direcao: string;

  constructor(
  	private lancamentoService: LancamentoService,
    private httpUtil: HttpUtilService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.pagina = 0;
    this.ordemPadrao();
    this.obterFuncionarios();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      funcs: ['', []]
    });
  }

  ordemPadrao() {
    this.ordem = 'data';
    this.direcao = 'DESC';
  }

  get funcId(): string {
    return sessionStorage['funcionarioId'] || false;
  }

  obterFuncionarios() {
    this.funcionarioService.listarFuncionariosPorEmpresa()
      .subscribe(
        data => {
          const usuarioId: string = this.httpUtil.obterIdUsuario();
          this.funcionarios = (data.data as Funcionario[])
            .filter(func => func.id != usuarioId);
          
          if (this.funcId) {
            this.form.get('funcs').setValue(parseInt(this.funcId, 10));
            this.exibirLancamentos();
          }
        },
        err => {
          const msg: string = "Erro obtendo funcionários.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  exibirLancamentos() {
    if (this.matSelect.selected) {
      this.funcionarioId = this.matSelect.selected['value'];
    } else if (this.funcId) {
      this.funcionarioId = this.funcId;
    } else {
      return;
    }
    sessionStorage['funcionarioId'] = this.funcionarioId;
    
    this.lancamentoService.listarLancamentosPorFuncionario(
        this.funcionarioId, this.pagina, this.ordem, this.direcao)
      .subscribe(
        data => {
          this.totalLancamentos = data['data'].totalElements;
          const lancamentos = data['data'].content as Lancamento[];
          this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
        },
        err => {
          const msg: string = "Erro obtendo lançamentos.";
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }

  remover(lancamentoId: string) {
    this.lancamentoService.remover(lancamentoId)
    .subscribe(data=>{
      const msg: string = "Lançamento removido com sucesso !";
      this.snackBar.open(msg,'Sucesso',{duration: 500});
      this.exibirLancamentos();
    }),
    err=>{
      let msg : string = "tente novamente em instantes.";
      if(err.status === 400){
        msg = err.error.errors.join('');  
        
      }else{
        this.snackBar.open(msg, "Erro", {duration: 500})
      }
    }
  }
  
  removerDialog(lancamentoId: string) {  
    const dialog = this.dialog.open(ConfirmarDialog, {});
    dialog.afterClosed().subscribe(remover => {
      if (remover) {
        this.remover(lancamentoId);
      }
    });
  }

  paginar(pageEvent: PageEvent) {
    this.pagina = pageEvent.pageIndex;
    this.exibirLancamentos();
  }

  ordenar(sort: Sort) {
    if (sort.direction == '') {
      this.ordemPadrao();
    } else {
      this.ordem = sort.active;
      this.direcao = sort.direction.toUpperCase();
    }
    this.exibirLancamentos();
  }

}
@Component({
  selector: 'confirmar-dialog',
  template: `
    <h1 mat-dialog-title>Deseja realmente remover o lançamento ?</h1>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
        Não
      </button>
      <button mat-button [mat-dialog-close]="true" tabindex="2">
        Sim
      </button>
    </div>
  `,
})
export class ConfirmarDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}









