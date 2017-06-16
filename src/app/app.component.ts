import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: any = '';
  constructor(private _httpService: HttpService){}
  getWeather(city){
    this.weather = this._httpService.retrieveWeather(city);
    console.log(this.weather);
    
    
  }
}
