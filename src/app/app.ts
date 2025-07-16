import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather-service';
import { HttpClient } from '@angular/common/http';
import { NextDaysTemperature } from './components/next-days-temperature/next-days-temperature';
import { CurrentTemperature } from './components/current-temperature/current-temperature';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CurrentTemperature],
  templateUrl: './app.html',
  styleUrl: './app.scss'

  // standalone:true
})
export class App {
  protected title = 'weather-forecast-app';
  apiKey='36857eeedca446c3941101409251007';
  data:any=[];

  constructor(){}

  // getDetails(){
  //   this.weatherService.getWeather('landon').subscribe(
  //     (data)=>{this.data=data
  //     console.log(this.data)},
  //     (err)=>{
  //       console.log("No city Found")
  //     }
  //   );
  // }
  

}
