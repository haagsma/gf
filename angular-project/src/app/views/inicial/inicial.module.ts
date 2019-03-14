import {NgModule} from "@angular/core";
import {InicialRoutingModule} from "./inicial-routing.module";
import {AppCssModule} from "../../app-css.module";


import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        LoginComponent,
        CadastroComponent
    ],
    imports: [
        InicialRoutingModule,
        AppCssModule,
        FormsModule,
        BrowserModule
    ]
})

export class InicialModule {

}