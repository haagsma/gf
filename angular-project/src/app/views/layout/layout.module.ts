import {NgModule} from "@angular/core";
import {AppCssModule} from "../../app-css.module";
import {MenuUsuarioComponent} from "./menu-usuario/menu-usuario.component";
import {LayoutRoutingModule} from "./layout-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        MenuUsuarioComponent
    ],
    imports: [
        AppCssModule,
        LayoutRoutingModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        MenuUsuarioComponent
    ]
})

export class LayoutModule {

}