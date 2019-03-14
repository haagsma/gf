import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private user:UserService, private route: Router){}

    canActivate(){
        return this.check();
    }
    check(){
        if(this.user.getDados()){
            return true;
        }else{
            this.route.navigateByUrl('login')
            return false;
        }
    }
}