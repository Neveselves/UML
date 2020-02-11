import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import{CadastroPj} from '../../model/cadastro-pj.model';
import{CpfValidator} from '../../../../shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validators';
import { CadastrarPjService } from '../../services/cadastro-pj.service';
@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {
  form: FormGroup;
  constructor(
  	private fb: FormBuilder, 
  	private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPjService: CadastrarPjService) { }

  ngOnInit() {
  	this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(3)]],
  		email: ['', [Validators.required, Validators.email]],
  		senha: ['', [Validators.required, Validators.minLength(6)]],
  		cpf: ['', [Validators.required, CpfValidator]],//cpf validator valida um cpf original
  		razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
  		cnpj: ['', [Validators.required, CnpjValidator]] //cpf validator valida um cpf original
  	});
  }

  cadastrarPj() {
  	if (this.form.invalid) {
  		return;
    }
    const cadastroPj: CadastroPj = this.form.value     
    this.cadastrarPjService.cadastrar(cadastroPj).subscribe(
      data=>{
        console.log(JSON.stringify(data))
      const msg:string= "realize o login para acessar o sistema";
      this.snackBar.open(msg, "sucesso", {duration:5000});
      this.router.navigate(['/login']);
    },
    err =>{
      
      let msg: string="tente novamente em instantes";
      if(err.status === 400){
        msg = err.error.erros.json('');
      }
      this.snackBar.open(msg, "erro", {duration:5000})
    }) 
    
    return false
    
  }


}
