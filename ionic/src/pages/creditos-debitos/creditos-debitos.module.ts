import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditosDebitosPage } from './creditos-debitos';

@NgModule({
  declarations: [
    CreditosDebitosPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditosDebitosPage),
  ],
})
export class CreditosDebitosPageModule {}
