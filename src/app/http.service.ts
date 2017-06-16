import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveWeather(city) {
    let key: string = '&APPID=a92167a4463993e2caf8f9081690ee69';
    let url: string = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + key;
    return this._http.get(url).map(data=>data.json()).toPromise();
  }

}
