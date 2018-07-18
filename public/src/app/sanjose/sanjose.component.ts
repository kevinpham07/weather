import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	weather: any;
  constructor( private _httpService: WeatherService ){
  }
  ngOnInit() {
  	this.getSanJoseFromWeather();
  }
  getSanJoseFromWeather(){
  	this._httpService.getSanJose().subscribe( data => {
  		this.weather = data
  	})
  }
}
