import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {environment as env} from '../../../../environments/environment';
import{CadastroPj} from '../model/cadastro-pj.model'
import { Observable } from 'rxjs';

@Injectable()
export class CadastrarPjService {
    private readonly PATH: string = 'auth';
    constructor(private http: HttpClient){}

    cadastrar(cadastroPj:CadastroPj): Observable<any>{
        console.log(cadastroPj,'cheguei no serviço PJ')
        return this.http.post(env.baseUrl + this.PATH, cadastroPj)
    }

}