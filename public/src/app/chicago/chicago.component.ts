import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	weather: any;
  constructor( private _httpService: WeatherService) { }

  ngOnInit() {
  	this.getChicagoFromService();
  }

  getChicagoFromService(){
  	this._httpService.getChicago().subscribe( data => {
  		this.weather = data;
  	})
  }

}
