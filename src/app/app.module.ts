import { ManageModule } from './manage/manage.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { RentalModule } from './rental/rental.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';


const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RentalModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AuthModule,
    ManageModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
