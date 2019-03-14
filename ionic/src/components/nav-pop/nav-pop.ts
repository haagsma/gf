import { Component } from '@angular/core';
import { RotasProvider } from "../../providers/rotas/rotas";
import { NavController } from 'ionic-angular';

/**
 * Generated class for the NavPopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-pop',
  templateUrl: 'nav-pop.html'
})
export class NavPopComponent {

  titulo: string = '';

  constructor(private rotas: RotasProvider, private nav: NavController) {
    console.log('Hello NavPopComponent Component');
    this.titulo = this.rotas.titulo;
  }
  pop(){
    this.nav.pop();
  }

}
