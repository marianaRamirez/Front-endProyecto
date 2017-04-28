import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date: DateModel;
  options: DatePickerOptions;
  
  constructor() {
    this.options = new DatePickerOptions();
  }
}
