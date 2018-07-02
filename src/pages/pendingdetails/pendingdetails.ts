import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice'


/**
 * Generated class for the PendingdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendingdetails',
  templateUrl: 'pendingdetails.html',
})
export class PendingdetailsPage {
	public requestid : any;
	public currentColor : string;
	public pendingdetails : string;
	public requesttype : string;
	public pendingdetails_name : string;
	public pendingdetails_list : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataserv:DataserviceProvider) 
  {
  	 this.currentColor = 'secondary';
  	 this.requestid = navParams.get("REQUEST_ID");
  	 this.requesttype = navParams.get("request_type")
  	 this.dataserv.getpendingdetails(this.requestid).subscribe((val:any) => 
  	 {
  	 	const el = val._body
 		this.pendingdetails = JSON.parse(el)
 		this.pendingdetails_name = JSON.parse(el).OutputParameters.P_AME_APPROVERS_LIST.P_AME_APPROVERS_LIST_ITEM.DISPLAY_NAME
 		
 		if (this.requesttype == "Change Extra Information")  
 		{
 			this.pendingdetails_list = []
 		}
 		else
 		{
 			this.pendingdetails_list = JSON.parse(el).OutputParameters.P_LABEL_VALUE.P_LABEL_VALUE_ITEM
 		
 		}
 		
  	 })

  	 
  }


  	returnlabelclassname(requestname)
 	{
 		const request = requestname
 		var value = ''
 		if (request == 'Leave of Absence')
 		{
 			value = 'ui red ribbon label'
 		}
 		else if (request == 'Change Special Information')
 		{
 			value = 'ui blue ribbon label'
 		}
 		else if (request == 'Change Extra Information')
 		{
 			value = 'ui orange ribbon label'
 		}
 		return value
 	}

 		returnlabelname(requestname)
 	{
 		const request = requestname
 		var value = ''
 		if (request == 'Leave of Absence')
 		{
 			value = 'LEAVE'
 		}
 		else if (request == 'Change Special Information')
 		{
 			value = 'SPECIAL INFO'
 		}
 		else if (request == 'Change Extra Information')
 		{
 			value = 'EXTRA INFO'
 		}
 		return value
 	}


  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad PendingdetailsPage');
    console.log(this.navParams.get('REQUEST_ID'))
  }

}
