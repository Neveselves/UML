import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroPjComponent} from './components/cadastro-pj.component';
import { CadastrarPjComponent } from './components/cadastro-pj/cadastrar-pj.component';

export const CadastroPjRoutes: Routes = [
	{
		path: 'cadastro-pj',
		component: CadastroPjComponent,
		children: [
		  {
			path: '', 
			component: CadastrarPjComponent 
		  }
		         ]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroPjRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPjRoutingModule {
}


