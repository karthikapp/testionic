import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SitPageModule } from '../pages/sit/sit.module';
import { PendingdetailsPageModule } from '../pages/pendingdetails/pendingdetails.module'
import { CreaterequestPageModule } from '../pages/createrequest/createrequest.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http'
import { DataserviceProvider } from '../providers/dataservice/dataservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // SitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SitPageModule,
    PendingdetailsPageModule,
    CreaterequestPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // SitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataserviceProvider
  ]
})
export class AppModule {}
