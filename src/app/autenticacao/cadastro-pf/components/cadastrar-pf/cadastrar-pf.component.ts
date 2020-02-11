import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validators';
import { CadastroPfService } from '../../services/cadastro-pf.service';
import { CadastrarPf } from '../../model/cadastro-pf.model';
@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastroPfService: CadastroPfService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome:  ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required, CnpjValidator]] ,     
      toppings: ['',[Validators.required]]
    });
  }
  
 
  limpar(){
   
    this.form.reset({
      toppings: ''
    })
    
  }
  cadastrarPf() {
    if (this.form.invalid) {
      return;
    }


    const cadastrarPf: CadastrarPf = this.form.value
    this.cadastroPfService.cadastrarPf(cadastrarPf).subscribe(
      data => {
        console.log(JSON.stringify(data))
        const msg: string = "Realize o login para acessar o sistema.";
        this.snackBar.open(msg, "Sucesso", { duration: 5000 });
        this.router.navigate(['/login']);
      },
      err => {
        let msg: string = "tente novamente em instantes";
        if (err === 400) {
          msg = err.error.errors.join('');
        }
        this.snackBar.open(msg, "erro", { duration: 5000 })

      });
    return false;
  }

 
  
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
















