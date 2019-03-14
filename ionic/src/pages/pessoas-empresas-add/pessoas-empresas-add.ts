import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbProvider} from "../../providers/db/db";
import {UsuarioProvider} from "../../providers/usuario/usuario";

import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {PessoasEmpresasPage} from "../pessoas-empresas/pessoas-empresas";

/**
 * Generated class for the PessoasEmpresasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pessoas-empresas-add',
  templateUrl: 'pessoas-empresas-add.html',
})
export class PessoasEmpresasAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private user:UsuarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PessoasEmpresasAddPage');
  }
  cadastrar(form){
    if(!form.valid){
      swal.fire('Opss...', 'Preencha todos os campos obrigatórios corretamente', 'error');
    }else{
        form.value.user = this.user.dados._id;
        console.log(form.value);
        this.db.post('ativo/add', form.value).subscribe((res:any)=>{
            if(res.tipo == 1){
              swal.fire('Parabéns', 'Cadastro salvo com sucesso, agora você pode cadastrar débitos e créditos', 'success').then(()=>{
                this.navCtrl.setRoot(HomePage);
                this.navCtrl.push(PessoasEmpresasPage);
              })
            }else if(res.tipo == 0){
              swal.fire('Opss...', res.resposta, 'error').then(()=>{
                  //this.navCtrl.setRoot(HomePage);
                  //this.navCtrl.push(PessoasEmpresasPage);
              })
            }
        }, (err)=>{
            swal.fire('Opss...', 'Houve um erro, tente novamente!', 'error').then(()=>{
              this.navCtrl.setRoot(HomePage);
            });
        });
    }
  }

}
