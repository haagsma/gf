import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UserService {

    public dados:any;

    getDados(){
        let dados = localStorage.getItem('gfdadospuglig');
        return JSON.parse(dados);
    }
}