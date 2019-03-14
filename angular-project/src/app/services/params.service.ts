import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ParamsService {

    private params:any;

    getParams(){
        let temp = this.params;
        this.params = '';
        return temp;
    }
    setParams(data){
        this.params = data;
    }
}