import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient){}
    //private url = 'http://192.168.15.3:8081/';
    //private url = 'https://haagsmagfapp.herokuapp.com/';
    // private url = 'http://haagsma.com.br:8081/';

    private url = 'http://localhost:8081/';

    public getUrl(){
        return this.url;
    }
    public post(path, data){
        return this.http.post(this.url+path, data);
    }
    public upload(formData){
        return this.http.post(this.url+'user/upload', formData);
    }

}
