import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class DataBindingComponent {
  courseName: string = "angular 18";

  inputType = "checkbox";

  myClassName: string = "bg-primary";

  rollNo: number = 123;

  isIndian: boolean = false;

  currentData: Date = new Date();

  constructor() {}

  changeCourse() {
    this.courseName = "React js";
  }

  showAlert(message: string) {
    alert(message);
  }
}
