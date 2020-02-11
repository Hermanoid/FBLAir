import { Flight } from './Flight';

export class Booking {
  constructor(flight: Flight) {
    this.Flight = flight;
  }
  Flight: Flight;
  Email: string;
  FirstName: string;
  LastName: string;
  CreditCard: string;
  Expiration: Date;
  BookedOn: Date;

}
