import { TokenInterceptor } from './shared/token.interceptor';

import { AuthGuard } from './shared/auth.guard';

import { AuthComponent } from './auth.component';
import { AuthService } from './shared/auth.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }