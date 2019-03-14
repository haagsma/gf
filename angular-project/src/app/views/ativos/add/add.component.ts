import { Component } from '@angular/core';
import swal from "sweetalert2";
import {UserService} from "../../../services/user.service";
import {HttpService} from "../../../services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ativos-add-component',
  templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AtivosAddComponent {

  constructor(private user: UserService, private db: HttpService,private route: Router){}


  cadastrar(form){
      if(!form.valid){
          swal.fire('Opss...', 'Preencha todos os campos obrigatórios corretamente', 'error');
      }else{
          form.value.user = this.user.getDados()._id;
          console.log(form.value);
          this.db.post('ativo/add', form.value).subscribe((res:any)=>{
              if(res.tipo == 1){
                  swal.fire('Parabéns', 'Cadastro salvo com sucesso, agora você pode cadastrar débitos e créditos', 'success').then(()=>{
                      this.route.navigateByUrl('/home/ativos/list')
                  })
              }else if(res.tipo == 0){
                  swal.fire('Opss...', res.resposta, 'error').then(()=>{
                      this.route.navigateByUrl('/home/ativos/list')
                  })
              }
          }, (err)=>{
              swal.fire('Opss...', 'Houve um erro, tente novamente!', 'error').then(()=>{
                  this.route.navigateByUrl('/home')
              });
          });
      }
  }
}
