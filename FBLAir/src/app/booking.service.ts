import { Injectable } from '@angular/core';
import { Airport } from "./common/Airport";
import { Flight } from "./common/Flight";
import { Moment } from "moment/moment"
import moment = require('moment/moment');

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _airports: Airport[]; //This stores the list of airports internally, as a sort of cache that would be used with a database (if such existed)
  //This is a "getter", which means that any time another part of the code tries to read BookingService.Airports, they're calling this function, not reading a variable.
  get Airports() {  //You'll notice I don't specify a "setter".
    return this._airports || (this._airports = [ //Setting a variable (here, this._airports) also returns the value, so it can be used.
      //Obviously, since this website is without an actual airline company, DigitAir's presense at these airports is entirely fictitious.
      //These were simply taken from a list of the largest airpots in the United States (plus Omaha because, well, home spirit dies hard)
      //In practical application, this list would be downloaded from a database.
      { id: "OMA", fullName: "Eppley Airfield", locationServed: "Omaha, Nebraska, United States" },
      { id: "ATL", fullName: "Hartsfield-Jackson Atlanta International Airport", locationServed: "Atlanta, Georgia, United States" },
      { id: "LAX", fullName: "Los Angeles International Airport", locationServed: "Los Angeles, California, United States" },
      { id: "ORD", fullName: "O'Hare International Airport", locationServed: "Chicago, Illinois, United States" },
      { id: "DFW", fullName: "Dallas/Fort Worth International Airport", locationServed: "Dallas-Fort Worth, Texas, United States" },
      { id: "DEN", fullName: "Denver International Airport", locationServed: "Denver, Colorado, United States" },
      { id: "JFK", fullName: "John F. Kennedy International Airport", locationServed: "Queens, New York, New York, United States" },
      { id: "SFO", fullName: "San Francisco International Airport", locationServed: "San Mateo County, California" },
      { id: "MCO", fullName: "Orlando International Airport", locationServed: "Orlando, Florida, United States" },
      { id: "LAS", fullName: "McCarran International Airport", locationServed: "Las Vegas, Nevada, United States" }
    ])
  }

  private _flights: Flight[];
  get Flights() {
    return this._flights || //Check local cache
      (this._flights = <Flight[]>JSON.parse(sessionStorage.getItem("digitair_flights")) || //If our local cache is empty, try to read session storage
        this.grabFlights())//if our session storage is empty, get flights from cloud (here, a random function)
  }
  grabFlights(): Flight[] {
    //For demonstration purposes, we'll randomly generate flights.
    let sources = this.Airports;
    let destinations = this.Airports;
    let flights: Flight[];
    for(let source in sources) {
      for (let destination in destinations) {
        if (source !== destination) {
          let numberDailyFlights = Math.ceil(Math.random() * 3); //Generated flights will run on a consistent daily schedule. Connections between airports will  have a random number (0-3) of regularly scheduled flights each day.
          let flightTimes: number[]; //Delta minutes from midnight of a given day to the time of the flight.
          for (let i = 0; i < numberDailyFlights; i++) {
            flightTimes.push( //Add to array
              Math.ceil( //Round to nearest minute 
                Math.random() * 60 * (24 / numberDailyFlights) //Split the random times to be within even segments of the day (for 3 flights, for example, one time would be between 1AM-8AM, another 8AM-4PM, another 4PM-12PM)
              ) + i * (60 * 24 / numberDailyFlights) //Add enough minutes to put the time in the right segment
            )
          }
          let today = moment().startOf("day"); //Start with today, then start scheduling for two years.
          for (let i = 0; i < 730; i++) { //We just ignore leap days and whatever else.

          }
        }
      }
      destinations.shift(); //remove first airpot from list to prevent that connection from being re-generated
    }
    return null; //TODO Remove
  }
  constructor() { }
}
