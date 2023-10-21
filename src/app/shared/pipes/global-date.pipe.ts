import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'globalDate'
})
export class GlobalDatePipe implements PipeTransform {

  transform(value: Date, ...args: string[]): string {
    if(!value) return value;
    let locale : string = args[0] ? args[0] : 'en-IN';
    return new Intl.DateTimeFormat(locale,{
      year:'numeric',
      month:'long',
      day:'2-digit',
      weekday:'long',
      hour:'2-digit',
      minute:'2-digit'
    }).format(new Date(value));
  }

}
