import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpUtilService {

  constructor() { }
	//verifica se tem um usuário logado atraves do token
  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();
  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}    
    return { headers: httpHeaders };
  }
// obetem o id do usuário
  obterIdUsuario(): string {
  	if (!localStorage['token']) {
  	  return '';
  	}
  	const dadosUsuario = this.obterDadosUsuario();
  	return dadosUsuario ? dadosUsuario.id : '';// se dados do usuário for um objeto então retorno dadosUsuario.id senao retorna vazio;
  }

  obterIdEmpresa(): string {
    if (!localStorage['token']) {
      return '';
    }
    const dadosUsuario = this.obterDadosUsuario();
    return dadosUsuario ? dadosUsuario.empresaId : '';
  }

  obterDadosUsuario() {
    if (!localStorage['token']) {
      return '';
    }
    //atob descoptográfiga o token
    return JSON.parse(atob(localStorage['token'].split('.')[1]));
  }
	
}







