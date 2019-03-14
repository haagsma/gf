import { NgModule } from "@angular/core";
import {AtivosListComponent} from "./list/list.component";
import {AtivosRoutingModule} from "./ativos-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppCssModule} from "../../app-css.module";
import {FormsModule} from "@angular/forms";
import {AtivosEditComponent} from "./edit/edit.component";
import {AtivosAddComponent} from "./add/add.component";

@NgModule({
    declarations: [
        AtivosListComponent,
        AtivosEditComponent,
        AtivosAddComponent
    ],
    imports: [
        AtivosRoutingModule,
        BrowserModule,
        AppCssModule,
        FormsModule
    ],
    exports: [
        AtivosListComponent,
        AtivosEditComponent
    ]
})

export class AtivosModule {

}