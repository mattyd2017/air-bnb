import { Booking } from './../booking/shared/booking.model';
import { HelperService } from './../common/service/helper.service';
import { AuthGuard } from './../auth/shared/auth.guard';
import { MapModule } from './../common/map/map.module';
import { UppercasePipe } from './../common/pipes/uppercase.pipe';
import { RentalService } from './shared/rental.service';
import { FormsModule } from '@angular/forms';

import { NgModule, Component } from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { Daterangepicker } from 'ng2-daterangepicker';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { BookingService } from '../booking/shared/booking.service';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';

const routes: Routes = [
    {path : 'rentals',component: RentalComponent,
    children: [
        {path: '', component: RentalListComponent},
        {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
        {path: ':rentalId', component: RentalDetailComponent},
        {path: ':city/homes', component: RentalSearchComponent}
    ]
    },
  ];
@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent,
        UppercasePipe,
        RentalDetailBookingComponent,
        RentalSearchComponent,
        RentalCreateComponent
    ],
    imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MapModule,
    HttpClientModule,
    NgPipesModule,
    Daterangepicker,
    FormsModule
    
    ],
    providers: [
    RentalService,
    HelperService,
    BookingService
    ]
})
export class RentalModule {}
