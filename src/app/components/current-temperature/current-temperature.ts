import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather-service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NextDaysTemperature } from '../next-days-temperature/next-days-temperature';

@Component({
  selector: 'app-current-temperature',
  imports: [FormsModule,NgIf,NextDaysTemperature],
  templateUrl: './current-temperature.html',
  styleUrl: './current-temperature.scss'
})
export class CurrentTemperature {
  cityName:string='';
  error:string='';
  weatherData:any;
  loading:boolean=false;

  constructor(private weatherService:WeatherService){}

  ngOnInit(){
    this.loading=true;
    this.weatherService.getforecast('hyderabad').subscribe(
      (data)=>{
        this.weatherData=data;
        this.loading=false;
      },(err)=>{
        this.error="Failed to fetch weather Data. please try again.";
        this.weatherData=null;
        this.loading=false;
      }

    );
  }

  getWeatherDetails(cityName:string){
    this.loading=true;
    this.weatherService.getforecast(cityName).subscribe(
      (data)=>{
        this.weatherData=data;
        this.loading=false;
        this.error='';
        console.log(this.weatherData);
      }
      ,(err)=>{this.error="Failed to fetch weather data . Please try again .";
        this.loading=false;
        this.weatherData=null;
      }
    )
  }
}
