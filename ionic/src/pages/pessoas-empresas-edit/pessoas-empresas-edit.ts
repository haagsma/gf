import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RotasProvider} from "../../providers/rotas/rotas";
import {DbProvider} from "../../providers/db/db";
import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {PessoasEmpresasPage} from "../pessoas-empresas/pessoas-empresas";

/**
 * Generated class for the PessoasEmpresasEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pessoas-empresas-edit',
  templateUrl: 'pessoas-empresas-edit.html',
})
export class PessoasEmpresasEditPage {
  ativo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rota: RotasProvider, private db: DbProvider) {
    this.ativo = this.rota.getParams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PessoasEmpresasEditPage');
  }
  editar(form){
    form.value._id = this.ativo._id;
    this.db.post('ativo/editar', form.value).subscribe((res:any)=>{
      if(res.tipo == 0){
        swal.fire('Opss...', res.resposta, 'error');
      }else if(res.tipo == 1){
        swal.fire('Parabéns', 'Cadastro editado com sucesso', 'success').then(()=>{
          this.navCtrl.setRoot(HomePage);
          this.navCtrl.push(PessoasEmpresasPage);
        })
      }
    }, (err)=>{
      swal.fire('Opss...', 'Houve um erro interno, tente novamente!', 'error').then(()=>{
        this.navCtrl.setRoot(HomePage);
      })
    });

  }

}
