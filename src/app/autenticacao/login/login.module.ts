import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';
import{ LoginComponent } from './components/login/login.component';
import{LogarComponent} from './components/logar.component';
import{RouterModule} from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{MatInputModule,MatButtonModule,MatListModule,MatTooltipModule,MatIconModule,MatSnackBarModule} from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import{LoginService} from './services/login.serice'
@NgModule({
  declarations: [LoginComponent,LogarComponent],
  imports: [
    CommonModule,
   // LogarComponent,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule    
  ],
  providers:[LoginService]
})
export class LoginModule { }
