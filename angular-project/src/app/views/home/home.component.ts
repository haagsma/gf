import {Component, OnInit} from "@angular/core";
import {HttpService} from "../../services/http.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    public total = {
        ganho: 0,
        gasto: 0
    };

    constructor(private db: HttpService, private user: UserService){}

    ngOnInit(){
        this.list();
    }

    list(){
        this.db.post('registro/total', {id: this.user.getDados()._id}).subscribe((res:any)=>{
            console.log(res)
            this.total = res.data;
        });
    }
}