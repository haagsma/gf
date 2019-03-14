import {Component, OnInit} from '@angular/core';
import swal from "sweetalert2";
import {UserService} from "../../../services/user.service";
import {HttpService} from "../../../services/http.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    constructor(private user: UserService, private db: HttpService, private router: Router){}


    ngOnInit(){
        this.verando();
    }

    verando(){
        if(localStorage.getItem('gfdadospuglig')){
            this.user.dados = JSON.parse(localStorage.getItem('gfdadospuglig'));
            this.router.navigateByUrl('/home');
            // entrar sozinho
        }
    }
    login(form){
        if(!form.valid){
            swal.fire('Opss..', 'Preencha todos os campos para efetuar o login!', 'error');
        }else{
            this.db.post('user/login', form.value).subscribe((res:any)=>{
                if(res.tipo == 0){
                    swal.fire('Opss..', res.resposta, 'error');
                }else if(res.tipo == 1){
                    localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
                    this.user.dados = res.data;
                    this.router.navigateByUrl('/home');
                }else{
                    swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
                }
            }, (err)=>{
                swal.fire('Opss..', 'Houve um erro inesperado, tente mais tarde!', 'error');
            })
        }
    }

}
