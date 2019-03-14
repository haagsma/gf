import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RotasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RotasProvider {

  public titulo = '';
  private params:any;

  constructor(public http: HttpClient) {
    console.log('Hello RotasProvider Provider');
  }

  getParams(){
    let temp = this.params;
    this.params = '';
    return temp;
  }
  setParams(data){
    this.params = data;
  }

}
