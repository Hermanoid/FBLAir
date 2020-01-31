import { Component, OnInit, HostListener } from '@angular/core';
declare var init: any; //This "init()" function refers to the "init" function of the Adobe CC Animation.
// ...It's declared in the index.html header for the entire website, because that was the simplest place to put it,
// ...but this function needs to be called in this component when it loads, in ngOnInit()
declare var animationComplete: boolean; //Similar deal, except I manually added this field.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  brandVisible = true;
  constructor() {
  }

  ngOnInit() {
    init();
  }

  ngAfterViewInit() {
    setTimeout(() => { this.brandVisible = false; }, 3000);
  }
}
