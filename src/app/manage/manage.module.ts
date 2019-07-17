import { FormatDatePipe } from './../common/pipes/format-date.pipe';
import { BookingService } from './../booking/shared/booking.service';
import { RentalService } from './../rental/shared/rental.service';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageComponent } from './manage.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';




const routes: Routes = [
    {
        path: 'manage',
        component: ManageComponent,
        children: [
            {path: 'rentals', component: ManageRentalComponent, canActivate: [AuthGuard]},
            {path: 'bookings', component: ManageBookingsComponent, canActivate: [AuthGuard]}
        ]        
    }    
];

@NgModule({
  declarations: [
      ManageComponent,
      ManageBookingsComponent,
      ManageRentalComponent,
      FormatDatePipe,
      ManageRentalBookingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule
  ],
  providers: [
    BookingService,
    RentalService
  ]
})
export class ManageModule { }