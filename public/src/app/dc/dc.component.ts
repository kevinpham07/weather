import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
	weather: any;
  constructor( private _httpService: WeatherService) {
	}

  ngOnInit() {
  	this.getDCFromWeather()
  }

  getDCFromWeather(){
  	this._httpService.getDC().subscribe( data => {
  		this.weather = data;
  	})
  }

}
