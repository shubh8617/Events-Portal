import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Welcome to Bosch Events Portal';
  subTitle : string = 'Designed and developed by Bosch Employee';
  myCMS: string = "Hello Bosch -<alert> This is very Bad code</alert>! Will this work?";
  isDisabled: boolean = false;

  changeTitle():void{
    this.title = "Welcome to Bosch Events Portal! Bangalore";
    console.log('Button has been clicked');
  }
}
