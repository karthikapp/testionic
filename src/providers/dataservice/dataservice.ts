import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class DataserviceProvider {
  	public value : any;

  	constructor(private http: Http) {
  		console.log('Hello DataserviceProvider Provider');
  	}

  	getmessages()
  	{

  		return this.http.get('https://reqres.in/api/users?page=2')
  	}
  }
