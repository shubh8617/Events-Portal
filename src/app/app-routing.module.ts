import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { GeneralHomeComponent } from './home/components/general-home/general-home.component';
import { EmployeesListComponent } from './employees/components/employees-list/employees-list.component';
import { EventsListComponent } from './events/components/events-list/events-list.component';
import { EventDetailsComponent } from './events/components/event-details/event-details.component';

const appRoutes: Routes = [
  {
    path :'',
    component : GeneralHomeComponent
  },
  {
    path :'home',
    component : GeneralHomeComponent
  },
  {
    path :'employees',
    component : EmployeesListComponent
  },
  {
    path :'events',
    component : EventsListComponent
  },
  {
    path :'events/:id',
    component : EventDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
