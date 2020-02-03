import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var init: any; //This "init()" function refers to the "init" function of the Adobe CC Animation.
// ...It's declared in the index.html header for the entire website, because that was the simplest place to put it,
// ...but this function needs to be called in this component when it loads, in ngOnInit()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  brandVisible = true;
  animationComplete = false;
  constructor(private router: Router) {
  }

  ngOnInit() {
    init();
    document.addEventListener("animationComplete", () => {
      this.animationComplete = true;
    })
  }

  ngAfterViewInit() {
    setTimeout(() => { this.brandVisible = false; }, 3000);
  }
}
