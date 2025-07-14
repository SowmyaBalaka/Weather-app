import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient){

  }
    apiKey="36857eeedca446c3941101409251007";
    

    // getWeather(city:string):Observable<any>{
    //   const apiURL=`http://api.weatherapi.com/v1/current.json?key=36857eeedca446c3941101409251007&q=${city}&aqi=no`;
    //   this.city=city;
    //   return this.httpClient.get(apiURL);
    // }
    

    getforecast(city:string):Observable<any>{
    const url=`http://api.weatherapi.com/v1/forecast.json?key=36857eeedca446c3941101409251007&q=${city}&days=6&aqi=no&alerts=no`;
    return this.httpClient.get(url);
  }
}
