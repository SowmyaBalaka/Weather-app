import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search {
  cityName:string=''
  @Output() searcheCityName = new EventEmitter<string>()
  getCityName(city:string){
      this.searcheCityName.emit(city);
      this.cityName='';
  }
}
