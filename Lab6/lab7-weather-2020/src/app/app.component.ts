import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Country} from '@angular-material-extensions/select-country';
import {Weather} from './model/weather.model';
import {OpenWeatherService} from './service/open-weather.service';

function parseResponse(response: any): Weather {
  return new Weather({mainCondition: response.weather[0].main,
      temperature: response.main.temp - 273.15,
      pressure: response.main.pressure,
      humidity: response.main.humidity,
      windspeed: response.wind.speed,
      city: response.name,
      country: response.sys.country
    }
  );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-application';
  weatherForm: FormGroup;
  condition: Weather;
  message: string;
  currentDate: number;


  constructor(private formBuilder: FormBuilder,
              private weatherService: OpenWeatherService) {
  }

  ngOnInit(): void {

    this.weatherForm = this.formBuilder.group({
      country: [],
      city: []
    });
  }

  submit(): void {
    const selectedCountry: Country = this.weatherForm.get('country').value;
    const selectedCity: string = this.weatherForm.get('city').value;
    this.weatherService.getWeatherAtCity(selectedCity, selectedCountry.alpha2Code).subscribe(
      (response: any) => {
        this.message = null;
        this.currentDate = Date.now();
        this.condition = parseResponse(response); },
      (error: any) => {this.condition = null; this.message = error; }
    );
  }
}
