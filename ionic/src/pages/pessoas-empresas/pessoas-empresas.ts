import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PessoasEmpresasAddPage} from "../pessoas-empresas-add/pessoas-empresas-add";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { DbProvider } from "../../providers/db/db";
import swal from 'sweetalert2';
import {HomePage} from "../home/home";
import {RotasProvider} from "../../providers/rotas/rotas";
import {PessoasEmpresasEditPage} from "../pessoas-empresas-edit/pessoas-empresas-edit";

/**
 * Generated class for the PessoasEmpresasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pessoas-empresas',
  templateUrl: 'pessoas-empresas.html',
})
export class PessoasEmpresasPage {

  public ativos:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private user: UsuarioProvider, private db:DbProvider, private rota: RotasProvider) {

  }

  ionViewCanEnter() {
    console.log('ionViewDidLoad PessoasEmpresasPage');
    this.list()
  }
  add(){
    this.navCtrl.push(PessoasEmpresasAddPage);
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
  editar(data){
    this.rota.setParams(data);
    this.navCtrl.push(PessoasEmpresasEditPage);
  }
  excluir(data){
    swal.fire({
        title: 'Você tem certeza que quer excluir?',
        text: 'Uma vez o cadastro excluido, não é possível recupera-lo!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((res:any)=>{
      if(res.value){
          this.db.post('ativo/excluir', {id: data}).subscribe((res2:any)=>{
              if(res2.tipo == 0){
                swal.fire('Ops...', res2.resposta, 'error');
              }else if(res2.tipo == 1){
                swal.fire('Parabéns', 'Cadastro deletado com sucesso', 'success').then(()=>{
                  this.navCtrl.setRoot(HomePage);
                  this.navCtrl.push(PessoasEmpresasPage);
                })
              }
          }, (err2)=>{
            swal.fire('Opss...', 'Houve um erro ao solicitar a remoção do cadastro, tente novamente!', 'error')
          });
      }
    })
    //
  }

}
