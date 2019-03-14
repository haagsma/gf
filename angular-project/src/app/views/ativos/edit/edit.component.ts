import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {HttpService} from "../../../services/http.service";
import {ParamsService} from "../../../services/params.service";
import {Router} from "@angular/router";
import swal from "sweetalert2";

@Component({
  selector: 'ativos-edit-component',
  templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class AtivosEditComponent implements OnInit{

  dados:any;

  constructor(private user: UserService, private db: HttpService, private params: ParamsService, private route: Router){

  }

  ngOnInit(){
    this.dados = this.params.getParams();
    if(!this.dados){
      this.route.navigateByUrl('/home/ativos/list')
    }
  }

  cadastrar(form){
      form.value._id = this.dados._id;
      this.db.post('ativo/editar', form.value).subscribe((res:any)=>{
          if(res.tipo == 0){
              swal.fire('Opss...', res.resposta, 'error');
          }else if(res.tipo == 1){
              swal.fire('Parabéns', 'Cadastro editado com sucesso', 'success').then(()=>{
                  this.route.navigateByUrl('/home/ativos/list')
              })
          }
      }, (err)=>{
          swal.fire('Opss...', 'Houve um erro interno, tente novamente!', 'error').then(()=>{
              this.route.navigateByUrl('/home')
          })
      });
  }

}
