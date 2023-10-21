import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "../models/event";

@Injectable()
export class EventsService {
  constructor(private _httpClient:HttpClient) {

   }
   private _apiBaseUrl: string = "http://localhost:9090/api";
   getAllEvents():Observable<Event[]>{
   return this._httpClient.get<Event[]>(`${this._apiBaseUrl}/events`)
   }
   getEventDetails(eventID:number):Observable<Event>{
    return this._httpClient.get<Event>(`${this._apiBaseUrl}/events/${eventID}`)
    }

}
