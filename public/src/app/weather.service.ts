import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	constructor( private _http: HttpClient ) {
	}

	getSanJose(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5392171&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
	getSeattle(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
	getBurbank(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5331835&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
	getDC(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
	getChicago(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4887398&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
	getDallas(){
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4684888&units=imperial&APPID=f1f321d665e0534c6bad8384c6e8ece0')
	}
}
