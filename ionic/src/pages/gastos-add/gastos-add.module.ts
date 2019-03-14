import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GastosAddPage } from './gastos-add';

@NgModule({
  declarations: [
    GastosAddPage,
  ],
  imports: [
    IonicPageModule.forChild(GastosAddPage),
  ],
})
export class GastosAddPageModule {}
