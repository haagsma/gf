import {NgModule} from "@angular/core";
import {AppCssModule} from "../../app-css.module";
import {GastosComponent} from "./gastos.component";
import {GanhosComponent} from "./ganhos.component";

@NgModule({
    declarations: [
        GastosComponent,
        GanhosComponent
    ],
    imports: [
        AppCssModule,
    ]
})
export class ControleModule {

}