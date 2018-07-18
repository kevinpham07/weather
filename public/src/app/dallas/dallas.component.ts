import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
	weather: any;
  constructor( private _httpService: WeatherService) { 
  }

  ngOnInit() {
  	this.getDallasFromService()
  }

  getDallasFromService(){
  	this._httpService.getDallas().subscribe( data => {
  		this.weather = data;
  	})
  }

}
