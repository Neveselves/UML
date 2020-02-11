import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{CadastrarPf} from '../model/cadastro-pf.model';
import{environment as env } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CadastroPfService {
  private readonly PATH: string = 'cadastrar-pf';
  constructor(private http: HttpClient) { }
  
  cadastrarPf(cadastrarPf: CadastrarPf):Observable<any>{
    console.log(cadastrarPf, 'cheguei no servico')
    return this.http.post(env.baseUrl+ this.PATH,cadastrarPf);
  }
}
