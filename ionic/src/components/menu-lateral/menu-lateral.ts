import { Component } from '@angular/core';
import { RotasProvider } from "../../providers/rotas/rotas";
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
import {PessoasEmpresasPage} from "../../pages/pessoas-empresas/pessoas-empresas";
import {HomePage} from "../../pages/home/home";
import {PerfilPage} from "../../pages/perfil/perfil";
import {CreditosDebitosPage} from "../../pages/creditos-debitos/creditos-debitos";
import {GastosPage} from "../../pages/gastos/gastos";
import {GanhosPage} from "../../pages/ganhos/ganhos";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {DbProvider} from "../../providers/db/db";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the MenuLateralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-lateral',
  templateUrl: 'menu-lateral.html'
})
export class MenuLateralComponent {

  text: string;
  user:any;
  fotoChoosed:any = false;

  constructor(private rotas: RotasProvider, private nav:NavController, private puser: UsuarioProvider, private db: DbProvider, private DomSanitizer:DomSanitizer) {
      this.user = this.puser.dados;
    console.log('Hello MenuLateralComponent Component');
      this.getImgPerfil();
      $(document).ready(function(){
          $(".comp-menu").click(function(){
              $(".menu-lateral").toggle();
              $(".bk-menu-lateral").toggle();
          });
      });
  }

  getImgPerfil(){
      this.fotoChoosed = this.db.getUrl()+'uploads/perfil-'+this.puser.dados._id+'.png?'+Math.random();
  }
  onError(){
      this.fotoChoosed = false;
  }
  home(){
      this.nav.setRoot(HomePage);
  }
  perfil(){
      this.rotas.titulo = 'Perfil';
    this.nav.push(PerfilPage);
  }
  pessoasEmpresas(){
    this.rotas.titulo = 'Pessoas/Empresas';
    this.nav.push(PessoasEmpresasPage);
  }
  creditosDebitos(){
      this.rotas.titulo = 'Créditos/Débitos';
      this.nav.push(CreditosDebitosPage);
  }
  gastos(){
      this.rotas.titulo = 'Gastos';
      this.nav.push(GastosPage);
  }
  ganhos(){
      this.rotas.titulo = 'Ganhos ';
      this.nav.push(GanhosPage)
  }

}
