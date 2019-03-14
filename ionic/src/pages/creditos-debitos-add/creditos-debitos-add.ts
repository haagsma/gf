import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RotasProvider } from "../../providers/rotas/rotas";
import {DbProvider} from "../../providers/db/db";
import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {CreditosDebitosPage} from "../creditos-debitos/creditos-debitos";

/**
 * Generated class for the CreditosDebitosAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos-debitos-add',
  templateUrl: 'creditos-debitos-add.html',
})
export class CreditosDebitosAddPage {
  public params:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rota:RotasProvider, private db: DbProvider) {
    this.params = this.rota.getParams();
  }

  ionViewCanEnter(){

  }
  registrar(form){
    if(form.valid){
      form.value.ativo = this.params.id;
      form.value.tipo = this.params.tipo;
      this.db.post('registro/add', form.value).subscribe((res:any)=>{
        if(res.tipo == 0){
          swal.fire('Opss', res.resposta, 'error')
        }else if(res.tipo == 1){
          swal.fire('Parabéns', 'Registro cadastrado com sucesso!', "success").then(()=>{
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.push(CreditosDebitosPage)
          })
        }else{
            swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error')
        }
      }, (err)=>{
          swal.fire('Opss...', 'Houve um erro ao salvar o registro, tente novamente mais tarde!', 'error')
      });
      console.log(form.value);
    }else{
      swal.fire('Opss...', 'Preencha o valor corretamente', 'error')
    }
  }

}
