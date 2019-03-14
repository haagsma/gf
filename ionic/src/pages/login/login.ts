import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CadastroUsuarioPage} from "../cadastro-usuario/cadastro-usuario";
import {HomePage} from "../home/home";
import { DbProvider } from "../../providers/db/db";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import swal from 'sweetalert2';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private user:UsuarioProvider) {
    this.verando()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  cadastro(){
    this.navCtrl.push(CadastroUsuarioPage);
  }
  verando(){
    if(localStorage.getItem('gfdadospuglig')){
        this.user.dados = JSON.parse(localStorage.getItem('gfdadospuglig'));
        this.navCtrl.setRoot(HomePage);
    }
  }
  login(form){
    if(!form.valid){
      swal.fire('Opss..', 'Preencha todos os campos para efetuar o login!', 'error');
    }else{
      this.db.post('user/login', form.value).subscribe((res:any)=>{
        if(res.tipo == 0){
            swal.fire('Opss..', res.resposta, 'error');
        }else if(res.tipo == 1){
            localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
            this.user.dados = res.data;
            this.navCtrl.setRoot(HomePage);
        }else{
            swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
        }
      }, (err)=>{
          swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
      })
    }
  }

}
