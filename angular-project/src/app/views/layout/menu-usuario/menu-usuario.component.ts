import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../../services/user.service";
import {HttpService} from "../../../services/http.service";

@Component({
    selector: 'menu-usuario',
    templateUrl: './menu-usuario.component.html',
    styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit{

    public fotoChoosed:any;
    public user:any;

    constructor(private router: Router, public DomSanitizer:DomSanitizer, private userr: UserService, private db:HttpService){}

    ngOnInit(){
        this.user = this.userr.getDados();
        this.getImgPerfil();
    }
    onError(){

    }
    home(){
        document.location.reload();
    }
    pessoasEmpresas(){
        this.router.navigateByUrl('/home/ativos/list');
    }
    getImgPerfil(){
        this.fotoChoosed = this.db.getUrl()+'uploads/perfil-'+this.userr.getDados()._id+'.png?'+Math.random();
    }


}