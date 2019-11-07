import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'a6e31665a7bc118627da75eb319220e5';
  URI = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    console.log(`${this.URI}${cityName},${countryCode}&appid=${this.apiKey}`);
    return this.http.get(`${this.URI}${cityName},${countryCode}&appid=${this.apiKey}`);
  }
}
