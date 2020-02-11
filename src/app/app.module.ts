import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importações ao longo do curso
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{LoginModule} from './autenticacao/login/login.module';
import{LoginRoutingModule} from './autenticacao/login/login-routing.module';
import{CadastroPjModule} from './autenticacao/cadastro-pj/cadastro-pj.module'
import{CadastroPjRoutingModule} from './autenticacao/cadastro-pj/cadastro-pj-routing.module'
import{CadastroPfModule} from './autenticacao/cadastro-pf/cadastro-pf.module';
import{CadastroPfRoutingModule} from './autenticacao/cadastro-pf/cadastro-pf-routing.module';
import{MatToolbarModule, MatIconModule} from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import{FuncionarioModule} from './funcionario/funcionario.module';
import { FuncionarioRoutingModule} from './funcionario/components/funcionario.routing.modules';
import {AdminModule} from './admin/admin.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports:[
    BrowserModule,   
    BrowserAnimationsModule,    
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
