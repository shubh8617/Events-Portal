import { Pipe, PipeTransform } from '@angular/core';

import { Event } from "../models/event";

@Pipe({
  name: 'filterEventByName'
})
export class FilterEventByNamePipe implements PipeTransform {

  transform(value: Event[], ...args: string[]): Event[] {
    if(!value) return value;
    let filterCharacters : string = args[0] ? args[0] : '';
    return value.filter(event=>event.eventName.toLocaleLowerCase().
    includes(filterCharacters.toLocaleLowerCase())); //callback function
  }

}
