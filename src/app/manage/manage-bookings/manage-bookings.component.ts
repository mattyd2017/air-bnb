import { Booking } from './../../booking/shared/booking.model';
import { BookingService } from './../../booking/shared/booking.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.scss']
})
export class ManageBookingsComponent implements OnInit {

  bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getUserBookings().subscribe((bookings: Booking[]) => {
      this.bookings = bookings;
    }, () => {

    })
  }


}
