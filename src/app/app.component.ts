import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmployeeAdminComponent} from "./employee-admin/employee-admin.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {DataBindingComponent} from "./data-binding/data-binding.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
}
