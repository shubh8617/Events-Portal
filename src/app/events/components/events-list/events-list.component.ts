import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";
import { Event} from "../../models/event";
import { EventsService } from "../../services/events.service";

@Component({
  selector: 'bosch-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {
  constructor(private _eventsService: EventsService){
  }
  private _eventsServiceSubscription: Subscription
  ngOnInit(): void {
   this._eventsServiceSubscription =  this._eventsService.getAllEvents().subscribe({
      next:data=>this.events = data
    });
  }
  title: string = "Welcome To Gyrus Events List!";
  subTitle: string = "Published by Gyrus Hr Team! India!";
  searchChars:string = '';
  pageNumber : number = 1;
  totalItems : number=2;
  events: Event[];
  selectedEvent : Event;
  onEventSelection(event : Event):void{
    this.selectedEvent = event;
  }
  ngOnDestroy(): void {
    if(this._eventsServiceSubscription) this._eventsServiceSubscription.unsubscribe();
  }
}

