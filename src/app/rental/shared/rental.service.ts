import { Rental } from './rental.model';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RentalService {

    private rentals: Rental[] = [{
            id: '1',
            title: 'Crewe Council estate',
            city: 'Crewe',
            street: 'skid row',
            category: 'house',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 2,
            discription: 'nice quaint house in crewe',
            dailyRate: 50,
            shared: false,
            created: '24/02/2018'
          },
          {
            id: '2',
            title: 'london masionette',
            city: 'London',
            street: 'kettle lane',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 2,
            discription: 'nice quaint apartment in london',
            dailyRate: 200,
            shared: false,
            created: '24/12/2014'
          },
          {
            id: '3',
            title: 'fancy house newcastle',
            city: 'newcastle',
            street: 'grey street',
            category: 'house',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 2,
            discription: 'nice quaint house in newcastle',
            dailyRate: 50,
            shared: false,
            created: '10/02/2018'
          },
          {
            id: '4',
            title: 'chester city centre flat',
            city: 'chester',
            street: 'poole lane',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 2,
            discription: 'nice quaint flat in chester',
            dailyRate: 150,
            shared: false,
            created: '25/05/2017'
          }];
    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer) => {

        setTimeout(() => {
          const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId;
          })
          observer.next(foundRental);
        }, 500)
      })
    }

    public getRentals(): Observable<Rental[]> {
       return new Observable<Rental[]>((observer) => {
            setTimeout(() => {
                observer.next(this.rentals);
            }, 1000);
        });
        
    }

}
