import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { JobsComponent } from './jobs/jobs.component';
import { FreqflyComponent } from './freqfly/freqfly.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'freqfly', component: FreqflyComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
