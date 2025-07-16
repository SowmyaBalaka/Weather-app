import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-days-temperature',
  imports: [NgIf,NgFor],
  templateUrl: './next-days-temperature.html',
  styleUrl: './next-days-temperature.scss'
})
export class NextDaysTemperature {
    @Input() weatherData:any
    // ngOnInit(){
    //   if(this.weatherData!=null){
    //     console.log(this.weatherData.forecast);
    //   }
    // }
}
