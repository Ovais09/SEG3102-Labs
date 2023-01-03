import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempConverter';
  celsiusValue: any
  fahrenheitValue: any


  celsiusToFahrenheit() {
    this.fahrenheitValue = (this.celsiusValue * 9 / 5) + 32;
  }

  fahrenheitToCelsius() {
    this.celsiusValue = (this.fahrenheitValue - 32) * 5 / 9;
  }
}
