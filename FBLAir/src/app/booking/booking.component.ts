import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Airport } from '../common/Airport';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Flight } from '../common/Flight';
import * as moment from "moment"
import { Booking } from '../common/Booking';
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {
  public activePage: number;
  public source: Airport;
  public destination: Airport;
  public validate = false;
  public date: NgbDate;
  public filteredFlights: Flight[];
  public errorMessage: string;
  public currentBooking: Booking;
  faLongArrowAltRight = faLongArrowAltRight;
  constructor(public bookingService: BookingService) { }

  ngOnInit() {
    this.activePage = 1;
  }
  activatePage(num: number) {
    if ((!this.formValidated() && num != 1) //These two cases prevent users from navigating forward when they haven't completed the necessary steps
      ||(!this.currentBooking && num === 3)) {
      return;
    }
    this.activePage = num;
  }
  setSource($event) {
    this.source = this.bookingService.Airports.find((airport) => airport.id === $event.target.value);
    this.validateForm();
  }
  setDestination($event) {
    this.destination = this.bookingService.Airports.find((airport) => airport.id === $event.target.value);
    this.validateForm();
  }
  onDateSelection(date: NgbDate) {
    this.date = date;
    this.validateForm()
  }
  onManualDateEntry($event) {
    const javascriptDate = new Date($event.target.value); //Parse the date
    this.date = new NgbDate(javascriptDate.getUTCFullYear(), javascriptDate.getUTCMonth()+1, javascriptDate.getUTCDate()); //Convert it to NgbDate (the format used by Ng-boostraps datepicker module) (also months are 0-based in native javascript, so we must add 1 to get to 1-based for NgbDate)
    console.log(this.date);
    this.validateForm();
  }
  validateForm(): boolean { //Perform the validation (not to be confused with formValidated())
    if (this.source&&this.source === this.destination) {
      this.errorMessage = "The source airport cannot match the destination!";
    } else if (this.date && this.toMoment(this.date).isBefore(moment())) { //If the day is before today
      this.errorMessage = "Selected date must not be in the past";
    } else {
      this.errorMessage = null;
    }
    return this.formValidated();
  }
  formValidated(): boolean { //Verify that it is presently validated
    return !this.errorMessage && this.source && this.destination && !!this.date; //"Bang Bang you're boolean" (also, javascript allows not-bool variables to be used as booleans.  It just checks if the variable is defined or null)
  }
  formNext() {
    if (this.validateForm()) {
      this.activePage = 2;
      this.filterFlights();
      this.currentBooking = null;
    } else {
      this.validate = true;
    }
  }
  filterFlights() {
    let targetDay = this.toMoment(this.date); //Months in NgbDate are 1-index, but javascript starts its month numbering at 0.
    this.filteredFlights = this.bookingService.Flights.filter((flight) => {
      let correctDay = moment(flight.departureTime).isSame(targetDay, "day");
      return correctDay && flight.originAirportId === this.source.id && flight.destinationAirportId === this.destination.id;
    }).sort((a, b) => a.departureTime.getTime() - b.departureTime.getTime());
  }

  toMoment(date: NgbDate) : moment.Moment {
    return moment(new Date(this.date.year, this.date.month - 1, this.date.day));
  }

  book(flight: Flight) {
    this.currentBooking = new Booking(flight);
    this.activePage = 3;
  }
  submitBooking() {
    alert("Congratulations!  You've booked flight " + this.currentBooking.flight.id + '!');
  }
}
