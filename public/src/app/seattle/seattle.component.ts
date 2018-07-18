import { Component, OnInit } from '@angular/core';

import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	weather: any;
  constructor( private _httpService: WeatherService ) {
  }

  ngOnInit() {
  	this.getSeattleFromService();
  }

  getSeattleFromService(){
  	this._httpService.getSeattle().subscribe( data => {
  		this.weather = data;
  	})
  }
}
