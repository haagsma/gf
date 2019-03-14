import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GanhosAddPage} from "../ganhos-add/ganhos-add";
import {CreditosDebitosPage} from "../creditos-debitos/creditos-debitos";
import {HomePage} from "../home/home";
import swal from "sweetalert2";
import {DbProvider} from "../../providers/db/db";
import {UsuarioProvider} from "../../providers/usuario/usuario";

/**
 * Generated class for the GanhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ganhos',
  templateUrl: 'ganhos.html',
})
export class GanhosPage {
  registros:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private user:UsuarioProvider) {
    this.list();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GanhosPage');
  }
    list(){
        this.db.post('registro/ganhos', {id: this.user.dados._id}).subscribe((res:any)=>{
          console.log(this.user.dados._id);
            if(res.tipo == 0){
                swal.fire('Opss...', res.resposta, 'error').then(()=>{
                    this.navCtrl.setRoot(HomePage);
                })
            }else if(res.tipo == 1){
                this.registros = res.data;
            }else{
                swal.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
                    this.navCtrl.setRoot(HomePage);
                })
            }
        }, (err)=>{
            swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(()=>{
                this.navCtrl.setRoot(HomePage);
            })
        });
    }

}
