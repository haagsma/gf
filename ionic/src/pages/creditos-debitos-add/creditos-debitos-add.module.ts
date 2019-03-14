import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditosDebitosAddPage } from './creditos-debitos-add';

@NgModule({
  declarations: [
    CreditosDebitosAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditosDebitosAddPage),
  ],
})
export class CreditosDebitosAddPageModule {}
