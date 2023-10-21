import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {EmployeesModule } from "./employees/employees.module";
import { EventsModule } from "./events/events.module";
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigationModule } from './navigation/navigation.module';
import { SecurityModule } from './security/security.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmployeesModule,
    EventsModule,
    NgxPaginationModule,
    NavigationModule,
    SecurityModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
