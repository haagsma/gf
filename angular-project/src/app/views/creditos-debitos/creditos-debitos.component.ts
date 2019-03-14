import {Component, OnInit} from "@angular/core";
import swal from "sweetalert2";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {UserService} from "../../services/user.service";
import {ParamsService} from "../../services/params.service";

@Component({
    selector: 'creditos-debitos-component',
    templateUrl: './creditos-debitos.component.html'
})
export class CreditosDebitosComponent implements OnInit{

    ativos:any;

    constructor(private route: Router, private db: HttpService, private user: UserService, private params: ParamsService){}

    ngOnInit(){
        this.db.post('ativo/list', {id: this.user.getDados()._id}).subscribe((res:any)=>{
            this.ativos = res.data;
        }, (err)=>{
            swal.fire('Ops...', 'Houve um erro ao carregar os dados das pessoas e empresas', 'error').then(()=>{
                this.route.navigateByUrl('/home')
            })
        });
    }
    add(data){
        this.params.setParams(data);
        this.route.navigateByUrl('/home/creditos-debitos/add')
    }
    details(data){
        this.params.setParams(data);
        this.route.navigateByUrl('/home/creditos-debitos/detalhes')
    }

}