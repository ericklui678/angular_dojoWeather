import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: any = '';
  humidity: number;
  temp_avg: number;
  temp_high: number;
  temp_low: number;
  status: '';
  constructor(private _httpService: HttpService){
    this._httpService.retrieveWeather('san jose')
    .then( weather => {
      this.weather = weather;
      this.humidity = weather.main.humidity;
      this.temp_avg = Math.round((9/5)*(weather.main.temp-273.15)+32);
      this.temp_high = Math.round((9/5)*(weather.main.temp_max-273.15)+32);
      this.temp_low = Math.round((9/5)*(weather.main.temp_min-273.15)+32);
      this.status = weather.weather[0].description;
    })
    .catch( err => { console.log(err);})
  }
  getWeather(city){
    this._httpService.retrieveWeather(city)
    .then( weather => {
      this.weather = weather;
      this.humidity = weather.main.humidity;
      this.temp_avg = Math.round((9/5)*(weather.main.temp-273.15)+32);
      this.temp_high = Math.round((9/5)*(weather.main.temp_max-273.15)+32);
      this.temp_low = Math.round((9/5)*(weather.main.temp_min-273.15)+32);
      this.status = weather.weather[0].description;
    })
    .catch( err => { console.log(err);})
  }
}
