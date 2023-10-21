import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

import { FilterEventByNamePipe } from './pipes/filter-event-by-name.pipe';

import { EventsService } from "./services/events.service";


@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent,
    FilterEventByNamePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    EventsListComponent
  ],
  providers:[
    EventsService
  ]
})
export class EventsModule { }
