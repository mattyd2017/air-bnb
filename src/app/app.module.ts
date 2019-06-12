import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { RentalModule } from './rental/rental.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';




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
    RentalModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
