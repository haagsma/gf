import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import swal from 'sweetalert2';
import {DbProvider} from "../../providers/db/db";
import {HomePage} from "../home/home";
import { Camera } from "@ionic-native/camera";
import {PhotoLibrary} from "@ionic-native/photo-library";
import { DomSanitizer } from "@angular/platform-browser";
import {Base64} from "@ionic-native/base64";
declare var $:any;

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario:any;
  public fotos:any[] = [];
  public album:any[] = [];
  fotoChoosed:any = false;
  fotoToUpload:any = false;
  indiceArray:number = 0;
  verificaFor:boolean;
  loading = false;


  file:any;

  constructor(private base64: Base64 ,public navCtrl: NavController, public navParams: NavParams, private user: UsuarioProvider, private db: DbProvider, private camera: Camera, private photoLibrary: PhotoLibrary, private DomSanitizer:DomSanitizer) {
    this.usuario= this.user.dados;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.getImgPerfil();
  }
  getImgPerfil(){
      this.fotoChoosed = this.db.getUrl()+'uploads/perfil-'+this.user.dados._id+'.png?'+Math.random();
  }
  onError(){
      this.fotoChoosed = false;
  }
  att(form){
    if(!form.valid){
      swal.fire('Opss...', 'Preencha todos os campos corretamente!', 'error')
    }else{
        if(this.fotoToUpload){
            //this.db.startUpload(this.fotoToUpload);
        }
        form.value.id = this.user.dados._id;
        this.db.post('user/edit', form.value).subscribe((res:any)=>{
          this.user.dados = res.data;
          localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
            swal.fire('Parabéns', 'Seu perfil foi salvo com sucesso', "success").then(()=>{
              this.navCtrl.setRoot(HomePage)
            })
        }, (err)=>{
            swal.fire('Opss...', 'Erro ao salvar seu perfil, tente novamente mais tarde!', 'error')
        });
    }

  }

  getPhoto(event){
      console.log('inicio upload')
      this.loading = true;
      let index = event.target.files.length - 1;
      if(event.target.files && event.target.files[index]) {
          console.log('existe array')
          console.log(event.target.files);
          const file = event.target.files[index];
          const formData = new FormData();
          formData.append('perfil', file, 'perfil-'+this.user.dados._id+'.png');
          this.db.upload(formData).subscribe((res:any)=>{
              console.log('upload success: ',res);
              this.getImgPerfil();
              this.loading = false;
          }, (err)=>{
              console.log('Erro no  upload'+JSON.stringify(err))
              this.getImgPerfil();
              this.loading = false;
          })
      }else{

          console.log('-1 não vale burro')
      }

  }





}
