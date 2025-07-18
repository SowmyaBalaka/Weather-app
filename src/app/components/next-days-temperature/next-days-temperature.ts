import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedWeather } from '../../services/shared-weather';

@Component({
  selector: 'app-next-days-temperature',
  imports: [NgIf,NgFor],
  templateUrl: './next-days-temperature.html',
  styleUrl: './next-days-temperature.scss'
})
export class NextDaysTemperature {
    // @Input() weatherData:any
    weatherData:any;
    // ngOnInit(){
    //   if(this.weatherData!=null){
    //     console.log(this.weatherData.forecast);
    //   }
    // }
    constructor(private sharedService:SharedWeather){}

    ngOnInit(){
      this.sharedService.forecastData$.subscribe(
        (data)=>{
          this.weatherData=data
        }
      )
    }
}
