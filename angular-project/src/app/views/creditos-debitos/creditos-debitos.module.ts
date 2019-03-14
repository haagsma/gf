import {NgModule} from "@angular/core";
import {AppCssModule} from "../../app-css.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CreditosDebitosComponent} from "./creditos-debitos.component";
import {CreditosDebitosAddComponent} from "./add/add.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";

@NgModule({
    declarations: [
        CreditosDebitosComponent,
        CreditosDebitosAddComponent,
        DetalhesComponent
    ],
    imports: [
        AppCssModule,
        BrowserModule,
        FormsModule
    ]
})
export class CreditosDebitosModule {

}