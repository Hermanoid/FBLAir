import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { JobsComponent } from './jobs/jobs.component';
import { FreqflyComponent } from './freqfly/freqfly.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    JobsComponent,
    FreqflyComponent,
    AboutComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDatepickerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
