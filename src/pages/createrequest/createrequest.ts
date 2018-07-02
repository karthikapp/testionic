import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice'
/**
 * Generated class for the CreaterequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createrequest',
  templateUrl: 'createrequest.html',
})
export class CreaterequestPage {
	public request : any;
	public currentColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataserv:DataserviceProvider) 
  {
  	this.currentColor = 'secondary';
  	this.dataserv.createresquest().subscribe((val: any) => 
  	{
  		const el = val._body
 		this.request = JSON.parse(el).OutputParameters.P_ID_TYPE.P_ID_TYPE_ITEM
  		console.log("any",this.request)
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreaterequestPage');
  }

}
