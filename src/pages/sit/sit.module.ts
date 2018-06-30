import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitPage } from './sit';

@NgModule({
  declarations: [
    SitPage,
  ],
  imports: [
    IonicPageModule.forChild(SitPage),
  ],
})
export class SitPageModule {}
