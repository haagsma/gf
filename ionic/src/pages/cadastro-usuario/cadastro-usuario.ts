import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from "../../providers/db/db";
import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }
  login(){
    this.navCtrl.pop();
  }
  cadastrar(form){
      if(form.valid == false){
          swal.fire('Ops...', 'Preencha todos os campos corretamente!', 'error')
      }else{
          this.db.post('user/add', form.value).subscribe((res:any)=>{
              if(res.tipo == 0){
                  swal.fire('Error', res.resposta, 'error').then(()=>{
                      this.navCtrl.setRoot(LoginPage);
                  });
              }else if(res.tipo == 1){
                  swal.fire('Parabéns', 'Sua conta foi criada, agora você pode efetuar o login', 'success').then(()=>{
                      this.navCtrl.setRoot(LoginPage);
                  });
              }else{swal.fire('Error', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
                  this.navCtrl.setRoot(LoginPage);
              });
              }
          }, (err)=>{
              swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
          })
      }
  }
}
