import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataserviceProvider} from '../../providers/dataservice/dataservice'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public messages : any;

  constructor(public navCtrl: NavController, private dataserv:DataserviceProvider ) 
  {
  	this.messages = this.dataserv.getmessages().subscribe((val: any) => 
  	{	
  		console.log(val)
  		const el = val._body
  		this.messages =  el
  	})

  }

}
