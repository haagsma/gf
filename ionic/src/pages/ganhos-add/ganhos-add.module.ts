import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GanhosAddPage } from './ganhos-add';

@NgModule({
  declarations: [
    GanhosAddPage,
  ],
  imports: [
    IonicPageModule.forChild(GanhosAddPage),
  ],
})
export class GanhosAddPageModule {}
