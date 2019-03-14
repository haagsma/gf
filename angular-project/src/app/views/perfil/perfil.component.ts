import {Component, OnInit} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import swal from "sweetalert2";
import {HttpService} from "../../services/http.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
    selector: 'perfil-component',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

    usuario:any;
    public fotos:any[] = [];
    public album:any[] = [];
    fotoChoosed:any = false;
    fotoToUpload:any = false;
    indiceArray:number = 0;
    verificaFor:boolean;
    loading = false;


    file:any;

    constructor(public DomSanitizer:DomSanitizer, private db:HttpService, private user:UserService, private route:Router){}

    ngOnInit(){
        this.usuario = this.user.getDados();
        this.getImgPerfil();
    }

    getImgPerfil(){
        this.fotoChoosed = this.db.getUrl()+'uploads/perfil-'+this.user.getDados()._id+'.png?'+Math.random();
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
            form.value.id = this.user.getDados()._id;
            this.db.post('user/edit', form.value).subscribe((res:any)=>{
                this.user.dados = res.data;
                localStorage.setItem('gfdadospuglig', JSON.stringify(res.data));
                swal.fire('Parabéns', 'Seu perfil foi salvo com sucesso', "success").then(()=>{
                    this.route.navigateByUrl('/home')
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
            formData.append('perfil', file, 'perfil-'+this.user.getDados()._id+'.png');
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