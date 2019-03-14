import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {DbProvider} from "../../providers/db/db";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  total = {
    ganho: 0,
      gasto: 0
  };
  constructor(public navCtrl: NavController, private user: UsuarioProvider, private db: DbProvider) {


  }
  ngOnInit(){
      this.list()
  }
    ionViewCanEnter (){
  }
  list(){
    this.db.post('registro/total', {id: this.user.dados._id}).subscribe((res:any)=>{
      this.total = res.data;
    });
  }

}
