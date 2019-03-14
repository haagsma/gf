import { Component } from '@angular/core';
import swal from "sweetalert2";
import {Router} from "@angular/router";
import {HttpService} from "../../../services/http.service";

@Component({
    selector: 'cadastro-component',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

    constructor(private route: Router, private db: HttpService){}

    cadastro(form){
        if(form.valid == false){
            swal.fire('Ops...', 'Preencha todos os campos corretamente!', 'error')
        }else{
            this.db.post('user/add', form.value).subscribe((res:any)=>{
                if(res.tipo == 0){
                    swal.fire('Error', res.resposta, 'error').then(()=>{
                        this.route.navigateByUrl('/');
                    });
                }else if(res.tipo == 1){
                    swal.fire('Parabéns', 'Sua conta foi criada, agora você pode efetuar o login', 'success').then(()=>{
                        this.route.navigateByUrl('/');
                    });
                }else{swal.fire('Error', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
                    this.route.navigateByUrl('/');
                });
                }
            }, (err)=>{
                swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
            })
        }
    }

}
