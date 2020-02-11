import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoComponent} from './lancamento/lancamento.component';
import {ListagemComponent} from './listagem/listagem.component';
import {FuncionarioComponent} from './funcionario.component';


export const FuncionarioRoutes: Routes = [
	{
		path: 'funcionario',
		component: FuncionarioComponent,
		children: [
		  {
			path: 'listagem', 
			component: ListagemComponent 
          },
          {
			path: '', 
			component: LancamentoComponent 
		  }
		         ]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(FuncionarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FuncionarioRoutingModule {
}


