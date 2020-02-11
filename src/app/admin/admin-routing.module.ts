import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizacaoComponent} from '../admin/components/atualizacao/atualizacao.component';
import { CadastroComponent} from '../admin/components/cadastro/cadastro.component';
import { ListagemComponent} from '../admin/components/listagem/listagem.component';
import { AdminComponent} from '../admin/components/admin.component';
import { AdminGuard} from '../admin/services/admin-guard.service';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		//isso diz ao adminRoutes que o acesso a essas rotas são restrito somente ao admin
		canActivate:[AdminGuard],
		children: [
		  {
			path: '', 
			component: ListagemComponent 
		  },
		  {
			path: 'cadastro', 
			component: CadastroComponent 
		  },
		  {
			path: 'atualizacao/:lancamentoId', 
			component: AtualizacaoComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
