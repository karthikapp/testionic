import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataserviceProvider} from '../../providers/dataservice/dataservice'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public messages : any;
  public base64Image: string;
  public imagePath :any;
  public currentColor: string;
  public notifications : string;
  public pendingapprovals : string ; 

  constructor(public navCtrl: NavController, private dataserv:DataserviceProvider , private domSanitizer: DomSanitizer) 
  {
    this.currentColor = 'secondary';
    // getting user profile info
  	this.dataserv.getmessages().subscribe((val: any) => 
  	{	
  		// console.log("result foe",JSON.parse(val._body).OutputParameters.P_IMAGE)
  		const el = val._body
      this.base64Image =  JSON.parse(el).OutputParameters.P_IMAGE
      this.notifications = JSON.parse(el).OutputParameters.P_NOTIFICATIONS
      // console.log(this.notifications)
      this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ this.base64Image);
      // console.log('data:image/jpg;base64,'+ String(domSanitizer.bypassSecurityTrustUrl(this.base64Image)))
  	})

    // getting notifications 
    this.dataserv.getnotifications().subscribe((not: any) => {
      const value  = JSON.parse(not._body)
      // console.log(value)
      this.notifications = value.OutputParameters.NOTIFICATIONS
      // console.log("notifications",this.notifications)
    })

      // getting all approval list
    this.dataserv.getapprovalslist().subscribe((pending: any) => {
      const pendingval  = JSON.parse(pending._body)
      this.pendingapprovals = pendingval.OutputParameters.WORKLIST.WORKLIST_ITEM
      // this.notifications = pendingval.OutputParameters.NOTIFICATIONS
      console.log("pending",this.pendingapprovals)
    })


  }


    returnimage(imageurl:any)
  {
    var image = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ imageurl);
    return image
  }




  decode(input) {
    console.log("image url",input)
    var imageoutput = atob(input)
    return imageoutput
  }

}
