import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
