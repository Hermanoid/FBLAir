import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { faBuilding, faBriefcase, faWalking } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };
  faBuilding = faBuilding;
  faBriefcase = faBriefcase;
  faWalking = faWalking;
  constructor(private calendar: NgbCalendar) {
  }
  ngOnInit() {

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
