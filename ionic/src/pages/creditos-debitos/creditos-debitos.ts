import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetalhesPage} from "../detalhes/detalhes";
import { RotasProvider } from "../../providers/rotas/rotas";
import {CreditosDebitosAddPage} from "../creditos-debitos-add/creditos-debitos-add";
import {DbProvider} from "../../providers/db/db";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {HomePage} from "../home/home";
import swal from "sweetalert2";

/**
 * Generated class for the CreditosDebitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditos-debitos',
  templateUrl: 'creditos-debitos.html',
})
export class CreditosDebitosPage {
  ativos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rota: RotasProvider, private db: DbProvider, private user: UsuarioProvider) {
    this.list();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cre ditosDebitosPage');
  }
  details(data){
    this.rota.setParams(data);
    this.navCtrl.push(DetalhesPage);
  }
  add(data){
    this.rota.setParams(data);
    this.navCtrl.push(CreditosDebitosAddPage);
  }
  list(){
      this.db.post('ativo/list', {id: this.user.dados._id}).subscribe((res:any)=>{
          this.ativos = res.data;
      }, (err)=>{
          swal.fire('Ops...', 'Houve um erro ao carregar os dados das pessoas e empresas', 'error').then(()=>{
              this.navCtrl.setRoot(HomePage);
          })
      });
  }

}
