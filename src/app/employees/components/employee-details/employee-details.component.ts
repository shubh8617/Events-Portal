import { Component,Input } from '@angular/core';
import { Employee } from "../../models/employee";

@Component({
  selector: 'bosch-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  title:string="Details of - ";
  @Input() employee: Employee;
}
