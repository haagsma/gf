import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File, FileEntry } from "@ionic-native/file";
import {UsuarioProvider} from "../usuario/usuario";

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  constructor(public http: HttpClient, private file: File, private user: UsuarioProvider, ) {
    console.log('Hello DbProvider Provider');
  }
  //private url = 'http://192.168.15.3:8081/';
  private url = 'https://haagsmagfapp.herokuapp.com/';

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
