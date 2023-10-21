import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { EventsService } from "../../services/events.service";

import { Event } from "../../models/event";



@Component({
  selector: 'bosch-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  constructor(private _activatedRoute : ActivatedRoute, private _eventsService: EventsService){

  }
  title : string = "Details Of - ";
  event: Event;
  private _eventsServiceSubscription: Subscription;
  ngOnInit(): void {
      let eventId = this._activatedRoute.snapshot.params['id'];
      this._eventsServiceSubscription = this._eventsService.getEventDetails(Number.parseInt(eventId)).subscribe({
      next : data => this.event = data,
      error : error => console.log(error)
    });
  }
  ngOnDestroy(): void {
    if(this._eventsServiceSubscription)
    this._eventsServiceSubscription.unsubscribe();
  }
  
}
