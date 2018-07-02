import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Platform } from 'ionic-angular';
import { DataserviceProvider } from '../../providers/dataservice/dataservice'
import { PendingdetailsPage } from '../pendingdetails/pendingdetails'
import { CreaterequestPage } from '../createrequest/createrequest'
// import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the SitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-sit',
 	templateUrl: 'sit.html',
 })
 export class SitPage {
 	public currentColor : string;
 	status: string = "pending";
 	isAndroid: boolean = false;
 	public pendingsits : any;
 	public approvedlist : any;

 	constructor(public navCtrl: NavController, public navParams: NavParams,private dataserv:DataserviceProvider ) 
 	{
 		this.currentColor = 'secondary';
 		this.dataserv.getpendingapprovalsit().subscribe((val:any) => 
 		{
 			const el = val._body
 			this.pendingsits = JSON.parse(el).OutputParameters.SSPA.SSPA_ITEM
 			console.log(this.pendingsits)

 		})

 		this.dataserv.getapprovedhrlist().subscribe((value: any) =>
 		{
 			const elem = value._body
 			this.approvedlist = JSON.parse(elem).OutputParameters.REQUEST_DETAILS.REQUEST_DETAILS_ITEM
 			console.log(this.approvedlist)
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

 	returnlabelclassnameapproved(requestname)
 	{
 		const request = requestname
 		var value = ''
 		if (request == "AEIT")
 		{
 			value = 'ui red ribbon label'
 		}
 		else if (request == 'SIT')
 		{
 			value = 'ui blue ribbon label'
 		}
 		else if (request == 'PEIT')
 		{
 			value = 'ui orange ribbon label'
 		}
 		else if (request == 'PEIT')
 		{
 			value = 'ui orange ribbon label'
 		}
 		else if (request == 'POEIT')
 		{
 			value = 'ui teal ribbon label'
 		}
 		return value
 	}



 	returnlabelnameapproved(requestname)
 	{
 		const request = requestname
 		var value = ''
 		if (request == "AEIT")
 		{
 			value = 'AEIT'
 		}
 		else if (request == 'SIT')
 		{
 			value = 'SIT'
 		}
 		else if (request == 'PEIT')
 		{
 			value = 'PEIT'
 		}
 		else if (request == 'POEIT')
 		{
 			value = 'POEIT'
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


 	navigate(requestid: string, requesttype: string) 
 	{
 		console.log("requestid",requestid)
 		this.navCtrl.push(PendingdetailsPage, 
 		{
 			REQUEST_ID: requestid,
 			request_type : requesttype
 		})
 	}

 	createrequest() 
 	{
 		
 		this.navCtrl.push(CreaterequestPage)
 	}




 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SitPage');
 	}

 }
