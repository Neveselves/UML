import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Route } from '@angular/compiler/src/core';
import { Login } from '../../model/login.model'
import { LoginService } from '../../services/login.serice'
import { error } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm()
  }
  public gerarForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    })
  }
  public logar() {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados invalidos", "erro", { duration: 500 });
      return
    }
    const login: Login = this.form.value
    this.loginService.logar(login)
      .subscribe(
        data => {
          localStorage['token'] = data['data']['token'];//guarda no localstorage
          const dataUsuario = JSON.parse(atob(data['data']['token'].split('.')[1]));//pega o primeiro dado
          console.log(JSON.stringify(dataUsuario))
          if (dataUsuario['role'] === 'ROLE_ADMIN') {
            this.router.navigate(['/admin'])
          } else {
            this.router.navigate(['/funcionario'])
          }

        },

        err => {
          let msg: string = 'tente novamente mais tarde';
          if (err['status'] === 401) {
            msg = 'Email ou Senha inválidos'
          }
          this.snackBar.open(msg, 'erro', { duration: 5000 });
        }
      )
  }

}
