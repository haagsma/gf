import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoasEmpresasPage } from './pessoas-empresas';

@NgModule({
  declarations: [
    PessoasEmpresasPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoasEmpresasPage),
  ],
})
export class PessoasEmpresasPageModule {}
