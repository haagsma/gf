///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from "@angular/core";
import swal from "sweetalert2";
import {UserService} from "../../services/user.service";
import {HttpService} from "../../services/http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'ganhos-component',
    templateUrl: './gastos.component.html'
})
export class GanhosComponent implements OnInit{

    registros:any;

    constructor(private user:UserService, private db:HttpService, private route:Router){}

    ngOnInit(){
        this.list();
    }

    list(){
        this.db.post('registro/ganhos', {id: this.user.getDados()._id}).subscribe((res:any)=>{
            if(res.tipo == 0){
                swal.fire('Opss...', res.resposta, 'error').then(()=>{
                    this.route.navigateByUrl('/home')
                })
            }else if(res.tipo == 1){
                console.log(res.data);
                this.registros = res.data;
            }else{
                swal.fire('Opss...', 'Houve um erro inesperado, tente novamente!', 'error').then(()=>{
                    this.route.navigateByUrl('/home')
                })
            }
        }, (err)=>{
            swal.fire('Opss...', 'Houve um erro inesperado, tente novamente mais tarde!', 'error').then(()=>{
                this.route.navigateByUrl('/home')
            })
        });
    }
}