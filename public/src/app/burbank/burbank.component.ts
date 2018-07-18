import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
	weather: any;
  	constructor( private _httpService: WeatherService) {
	}

  ngOnInit() {
  	this.getBurbankFromService();
  }

  getBurbankFromService(){

  	this._httpService.getBurbank().subscribe( data => {
  		this.weather = data;
  	})
  }

}
