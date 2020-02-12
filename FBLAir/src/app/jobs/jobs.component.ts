import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
  }
  ngOnInit() {

  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
