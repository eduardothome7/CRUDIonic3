import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailUsersPage } from './detail-users';

@NgModule({
  declarations: [
    DetailUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailUsersPage),
  ],
})
export class DetailUsersPageModule {}
