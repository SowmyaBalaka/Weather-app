import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedWeather {

  private _forecastDataSource = new Subject<any>();
  forecastData$ = this._forecastDataSource.asObservable();

  sendForecastData(data:any){
    this._forecastDataSource.next(data);
  }
  
}
