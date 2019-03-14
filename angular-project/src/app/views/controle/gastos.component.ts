import {Component, OnInit} from "@angular/core";
import swal from "sweetalert2";
import {UserService} from "../../services/user.service";
import {HttpService} from "../../services/http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'gastos-component',
    templateUrl: './gastos.component.html'
})
export class GastosComponent implements OnInit{

    registros:any;

    constructor(private user:UserService, private db:HttpService, private route:Router){}

    ngOnInit(){
        this.list();
    }

    list(){
        this.db.post('registro/gastos', {id: this.user.getDados()._id}).subscribe((res:any)=>{
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