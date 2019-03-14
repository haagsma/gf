import {Component, OnInit} from '@angular/core';
import swal from "sweetalert2";
import {HttpService} from "../../../services/http.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {ParamsService} from "../../../services/params.service";

@Component({
  selector: 'ativos-list-component',
  templateUrl: './list.component.html'
})
export class AtivosListComponent implements OnInit{

  public ativos:any;

  constructor(private db: HttpService, private user: UserService, private router: Router, private params: ParamsService){}

  ngOnInit(){
    this.list();
  }

    list(){
        this.db.post('ativo/list', {id: this.user.getDados()._id}).subscribe((res:any)=>{
          console.log(res.data)
            this.ativos = res.data;
        }, (err)=>{
            swal.fire('Ops...', 'Houve um erro ao carregar os dados das pessoas e empresas', 'error').then(()=>{
                this.router.navigateByUrl('/home');
            })
        });
    }
    editar(data){
      this.params.setParams(data);
      this.router.navigateByUrl('/home/ativos/edit');
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
                            document.location.reload();
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
