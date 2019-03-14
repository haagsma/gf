import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RotasProvider } from "../../providers/rotas/rotas";
import {DbProvider} from "../../providers/db/db";

import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {CreditosDebitosPage} from "../creditos-debitos/creditos-debitos";

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  registros:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private rotas: RotasProvider, private db: DbProvider) {
    this.list();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad  DetalhesPage');
  }
  list(){
    let params = this.rotas.getParams();
    console.log(params);
    this.db.post('registro/detalhes', {id: params.id}).subscribe((res:any)=>{
      if(res.tipo == 0){
        swal.fire('Opss...', res.resposta, 'error').then(()=>{
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.push(CreditosDebitosPage);
        })
      }else if(res.tipo == 1){
        this.registros = res.data;
      }else{
          swal.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
              this.navCtrl.setRoot(HomePage);
              this.navCtrl.push(CreditosDebitosPage);
          })
      }
    }, (err)=>{
      swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(()=>{
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.push(CreditosDebitosPage);
      })
    });
  }

}
