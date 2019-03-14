import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PessoasEmpresasAddPage } from './pessoas-empresas-add';

@NgModule({
  declarations: [
    PessoasEmpresasAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PessoasEmpresasAddPage),
  ],
})
export class PessoasEmpresasAddPageModule {}
