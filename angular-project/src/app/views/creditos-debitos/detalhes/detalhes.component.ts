import {Component, OnInit} from "@angular/core";
import swal from "sweetalert2";
import {ParamsService} from "../../../services/params.service";
import {HttpService} from "../../../services/http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'detalhes-component',
    templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit{
    registros:any;

    constructor(private param: ParamsService, private db: HttpService, private route: Router){

    }

    ngOnInit(){
        this.list();
    }

    list(){
        let params = this.param.getParams();
        if(!params){
            this.route.navigateByUrl('/home/creditos-debitos')
        }else{
            this.db.post('registro/detalhes', {id: params.id}).subscribe((res:any)=>{
                if(res.tipo == 0){
                    swal.fire('Opss...', res.resposta, 'error').then(()=>{
                        this.route.navigateByUrl('/home/creditos-debitos')
                    })
                }else if(res.tipo == 1){
                    this.registros = res.data;
                }else{
                    swal.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
                        this.route.navigateByUrl('/home/creditos-debitos')
                    })
                }
            }, (err)=>{
                swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(()=>{
                    this.route.navigateByUrl('/home/creditos-debitos')
                })
            });
        }
    }
}