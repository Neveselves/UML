import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent } from '../cadastro-pf/components/cadastrar-pf/cadastrar-pf.component';
import { CadastroPfComponent } from '../cadastro-pf/components/cadastro-pf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatSelectModule, MatInputModule, MatButtonModule, MatListModule, MatTooltipModule, MatIconModule, MatSnackBarModule} from '@angular/material';
import { CadastroPfService } from './services/cadastro-pf.service';
@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers:[CadastroPfService]
})
export class CadastroPfModule { }
