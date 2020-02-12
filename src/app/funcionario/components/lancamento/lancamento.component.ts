import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Tipo} from '../../../shared/models/tipo.enum';
import * as moment from 'moment';//biblioteca moment
//esse tipo de declaração é quando é algo externo ao angular 
declare var navigator: any;//pega a localização do usuário atraves do navegador
import{LancamentoService} from  '../../../shared/services/LancamentoService';
import{HttpUtilService} from  '../../../shared/services/http-util.service';
import { Lancamento } from 'src/app/shared/models/lancamento.model';
@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})

export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
  	private snackBar: MatSnackBar,
    private router: Router,
    private httpUtilService:HttpUtilService,
    private lancamentoService:LancamentoService
    ) { }

  ngOnInit() {
  	this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
  	this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
  	this.obterGeoLocation();
    this.ultimoTipoLancado = '';
    this.obterUltimoLancamento();  
  }

  obterGeoLocation(): string  {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => 
        	this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`);
    }
    
    return '';
  }

  iniciarTrabalho() {
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho() {
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco() {
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco() {
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  obterUltimoLancamento() {
    this.lancamentoService.buscarUltimoTipoLancado()
    .subscribe(
      data=>{
        this.ultimoTipoLancado = data.data ? data.data.tipo: '';
      },
      err=>{
        const msg: string = "erro ao obter ultimo lançamento";
        this.snackBar.open(msg, "Erro", {duration:5000});

      }
    )
    
  }

  cadastrar(tipo: Tipo) {
  const lancamento: Lancamento = new Lancamento(
    this.dataAtualEn,
    tipo,
    this.geoLocation,
    this.ultimoTipoLancado,
    this.httpUtilService.obterIdUsuario()
  )
  this.lancamentoService.cadastrar(lancamento)
  .subscribe(
    data=>{
      const msg: string = "lançamento cadastrado com sucesso";
      this.snackBar.open(msg, "cadastrado", {duration:5000});
      this.router.navigate(['/funcionario/listagem']);
    },
    err =>{
      let msg: string= "erro tente novamente em instantes";
      if(err.status == 400){
        msg= err.error.errors.join('');
      }
     this.snackBar.open(msg, "Erro", {duration:5000});

    }
  )


  }

  obterUrlMapa(): string {
  	return "https://www.google.com/maps/search/?api=1&query=" + 
  		this.geoLocation;
  }

  exibirInicioTrabalho(): boolean {
  	return this.ultimoTipoLancado == '' || 
  		this.ultimoTipoLancado == Tipo.TERMINO_TRABALHO;
  }

  exibirTerminoTrabalho(): boolean {
  	return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO || 
  		this.ultimoTipoLancado == Tipo.TERMINO_ALMOCO;
  }

  exibirInicioAlmoco(): boolean {
  	return this.ultimoTipoLancado == Tipo.INICIO_TRABALHO;
  }

  exibirTerminoAlmoco(): boolean {
  	return this.ultimoTipoLancado == Tipo.INICIO_ALMOCO;
  }

}








