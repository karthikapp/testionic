import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SitPage } from '../pages/sit/sit'
import { DataserviceProvider} from '../providers/dataservice/dataservice'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  public messages : any;
  public base64Image: string;
  public imagePath :any;
  public currentColor: string;
  public fullname : string;
  public job : string;
  public department : string;
  public dashboardpage : any;
  public sitpage : any;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private dataserv:DataserviceProvider , private domSanitizer: DomSanitizer) {
    this.initializeApp();
    this.currentColor = 'dark';

    this.dashboardpage = {title: 'Dashboard', component: HomePage}
    this.sitpage = {title: 'SitPage', component: SitPage}
    this.messages = this.dataserv.getmessages().subscribe((val: any) => 
    {  
      // console.log("result foe",JSON.parse(val._body).OutputParameters.P_IMAGE)
      const el = val._body
      // console.log("vl",val._body)
      this.fullname =  JSON.parse(el).OutputParameters.P_FULL_NAME
      this.job = JSON.parse(el).OutputParameters.P_JOB
      this.department = JSON.parse(el).OutputParameters.P_DEPT
      this.base64Image =  JSON.parse(el).OutputParameters.P_IMAGE
      this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ this.base64Image);
      // console.log("image",this.imagePath)
      // console.log('data:image/jpg;base64,'+ String(domSanitizer.bypassSecurityTrustUrl(this.base64Image)))
    })

  }


  returnimage(imageurl:any)
  {
    var image = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ imageurl);
  }






  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
