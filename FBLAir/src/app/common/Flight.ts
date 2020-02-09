//Ids and information in this class is organized like a database.  Theoretically, if this website were to obtain a fully functioning business behind it,
// this code would carry right over.
export class Flight {
  public id: number;
  public originAirportId: string;
  public destinationAirportId: string;
  public departureTime: Date;
  public arrivalTime: Date;
  public capacity: number;
  public price: number; //USD

  public remainingSeats: number;
}
