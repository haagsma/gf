import {Component, OnInit} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {ParamsService} from "../../../services/params.service";
import swal from "sweetalert2";


@Component({
    selector: 'creditos-debitos-add-component',
    templateUrl: './add.component.html'
})
export class CreditosDebitosAddComponent implements OnInit{

    params:any;

    constructor(private db:HttpService, private route: Router, private param: ParamsService){}

    ngOnInit(){
        this.params = this.param.getParams();
        if(!this.params){
            this.route.navigateByUrl('/home')
        }
    }
    cadastrar(form){
        if(form.valid){
            form.value.ativo = this.params.id;
            form.value.tipo = this.params.tipo;
            form.value.data = new Date();
            console.log('registro adicionado: ', form.value)
            this.db.post('registro/add', form.value).subscribe((res:any)=>{
                if(res.tipo == 0){
                    swal.fire('Opss', res.resposta, 'error')
                }else if(res.tipo == 1){
                    swal.fire('Parabéns', 'Registro cadastrado com sucesso!', "success").then(()=>{
                        this.route.navigateByUrl('/home/creditos-debitos')
                    })
                }else{
                    swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error')
                }
            }, (err)=>{
                swal.fire('Opss...', 'Houve um erro ao salvar o registro, tente novamente mais tarde!', 'error')
            });
            console.log(form.value);
        }else{
            swal.fire('Opss...', 'Preencha o valor corretamente', 'error')
        }
    }

}
