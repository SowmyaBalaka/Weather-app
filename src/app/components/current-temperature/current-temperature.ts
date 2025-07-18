import { Component, Input } from '@angular/core';
import { WeatherService } from '../../services/weather-service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NextDaysTemperature } from '../next-days-temperature/next-days-temperature';
import { SharedWeather } from '../../services/shared-weather';
import { Search } from '../search/search';

@Component({
  selector: 'app-current-temperature',
  imports: [FormsModule,NgIf,NextDaysTemperature,Search],
  templateUrl: './current-temperature.html',
  styleUrl: './current-temperature.scss'
})
export class CurrentTemperature {
  cityName:string='';
  error:string='';
  weatherData:any;
  loading:boolean=false;

  constructor(private weatherService:WeatherService,private shareService:SharedWeather){}

  ngOnInit(){
    this.loading=true;
    this.weatherService.getforecast('hyderabad').subscribe(
      (data)=>{
        this.weatherData=data;
        this.loading=false;
        this.shareService.sendForecastData(data);
      },(err)=>{
        this.handelError(err);
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
        this.shareService.sendForecastData(data);
      }
      ,(err)=>{
        this.handelError(err);
      }
    )
  }
  handelError(err:any){
    if(!navigator.onLine){
      this.error="You're offline . Please check Your Connection";
    }else if(err.error.error.message){
      this.error=err.error.error.message;
    }
    this.loading=false;
        this.weatherData=null;
        this.shareService.sendForecastData(null);
  }
}
