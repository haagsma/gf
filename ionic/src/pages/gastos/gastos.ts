import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GastosAddPage} from "../gastos-add/gastos-add";
import {DbProvider} from "../../providers/db/db";
import {HomePage} from "../home/home";
import swal from "sweetalert2";
import {UsuarioProvider} from "../../providers/usuario/usuario";

/**
 * Generated class for the GastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html',
})
export class GastosPage {
  registros:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private user: UsuarioProvider) {
    this.list();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GastosPage');
  }
  add(){
    this.navCtrl.push(GastosAddPage);
  }
  list(){
      this.db.post('registro/gastos', {id: this.user.dados._id}).subscribe((res:any)=>{
          if(res.tipo == 0){
              swal.fire('Opss...', res.resposta, 'error').then(()=>{
                  this.navCtrl.setRoot(HomePage);
              })
          }else if(res.tipo == 1){
              console.log(res.data);
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
