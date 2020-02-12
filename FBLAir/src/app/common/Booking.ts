import { Flight } from './Flight';

export class Booking {
  constructor(flight: Flight) {
    this.flight = flight;
  }
  flight: Flight;
  email: string;
  firstName: string;
  lastName: string;
  creditCard: string;
  expiration: Date;
  bookedOn: Date;

}
